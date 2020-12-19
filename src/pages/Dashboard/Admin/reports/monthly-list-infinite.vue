<template>
  <q-page>
    <template>
      <div>
        <q-table
          :class="is_mobile?'my-sticky-dynamic table-top-mobile':'my-sticky-dynamic'"
          :data="monthlyList"
          :columns="userLevel === 'admin' ? columns_admin : columns"
          row-key="report_date"
          :filter="filter"
          @request="getMonthlyAll"
          binary-state-sort
          virtual-scroll
          :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48"
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
        >
          <template v-slot:top>
            <div class="col-6 row justify-start">
              <q-input dense debounce="300" v-model="filter" placeholder="Search" input-class="text-white" color="blue-7" style="width:120px;" >
                <template v-slot:append> <q-icon name="search" color="white"/> </template>
              </q-input>
            </div>
            <div class="col-6 row justify-end">
              <q-input dense v-model="fromDate" style="width:120px;" input-class="text-white" color="blue-7">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" color="white">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="fromDate"
                        minimal
                        @input="onFromDateChanged"
                        mask="DD/MM/YY ddd"
                        color="blue-7"
                      >
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input dense v-model="endDate" style="width:120px;" input-class="text-white" color="blue-7" class="q-ml-xs">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" color="white">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="endDate"
                        minimal
                        @input="onEndDateChanged"
                        mask="DD/MM/YY ddd"
                        color="blue-7"
                      >
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click="goToSingleDetail(props.row)">
              <!-- <q-td key="index" :props="props">{{ props.row.index }}</q-td> -->
              <q-td key="report_date" :props="props">{{ props.row.report_date }}</q-td>
              <q-td v-if="userLevel === 'admin'" key="user_name" :props="props">{{ props.row.user.name }}</q-td>
              <q-td key="courier_name" :props="props">{{ props.row.courier_name }}</q-td>
              <q-td key="route_number" :props="props">{{ props.row.route_number }}</q-td>
              <q-td key="is_group" :props="props">{{ props.row.is_group === 1 ? 'FD Routes':'Extra Routes' }}</q-td>
              <!-- <q-td key="buttons" :props="props">
                <q-btn
                  :icon=" 'fas fa-pen-alt' "
                  @click.native.stop
                  @click="goToDetail(props.row.id)"
                />
                <q-btn
                  :icon=" 'fas fa-trash-alt' "
                  @click.native.stop
                  @click="remove(props.row)"
                />
              </q-td> -->
            </q-tr>
          </template>

          <template v-slot:bottom>
            <div class="col-6 row">
              Total Records: {{pagination.rowsNumber}}
            </div>
            <div class="col-6 row justify-end">
              <q-btn
                color="blue-7"
                label="Export"
                no-caps
                dense
                @click="exportTable"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:30px"
              />
            </div>
          </template>
        </q-table>
      </div>
      <q-dialog
        v-model="showDetail"
        persistent
        :maximized="true"
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E">
          <q-bar>
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
            <div class="text-h6 text-white">{{dialogTitle}}</div>
          </q-bar>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form
              @submit="onSubmit"
              ref="selectedRecord"
              :model="selectedRecord"
              style="max-width: 400px; margin: auto;"
            >
              <q-card style="background-color: #3E444E">
                <q-card-section>
                  <!-- <q-input dense outlined v-model="selectedRecord.report_date" v-if="isNewRecord" color="cyan-7" class="q-mb-xs" type="date" /> -->
                  <q-input dense outlined v-model="selectedRecord.report_date" bg-color="white" input-class="text-black text-center" color="blue-7">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-calendar
                            ref="calendar"
                            v-model="selectedRecord.report_date"
                            show-work-weeks
                            view="month"
                            mini-mode
                            enable-outside-days
                            bordered
                            locale="en-us"
                            :class="$q.dark.isActive ? 'bg-blue-grey-3': 'bg-grey-1' "
                            style="max-width: 300px; max-height:180px; min-width: auto; overflow: hidden"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                </q-card-section>
                <q-separator color="grey-4" />
                <q-card-section>
                  <q-select
                    dense
                    label="Courier"
                    outlined
                    v-model="selectedRecord.courier_id"
                    use-input
                    hide-selected
                    fill-input
                    :options="filteredNames"
                    :option-value="opt => opt === null ? null : opt.id"
                    :option-label="opt => opt === null ? '- Null -' : opt.courier_name"
                    emit-value
                    map-options
                    @filter="filterFn"
                    class="q-mb-xs"
                    behavior="menu"
                    bg-color="white"
                    input-class="text-black"
                    color="blue-7"
                  >
                  </q-select>
                  <q-select
                    dense
                    required
                    label="Route"
                    outlined
                    v-model="selectedRecord.route_id"
                    use-input
                    hide-selected
                    fill-input
                    :options="routes"
                    :option-value="opt => opt === null ? null : opt.id"
                    :option-label="opt => opt === null ? '- Null -' : opt.route_number"
                    emit-value
                    map-options
                    class="q-mb-xs"
                    behavior="menu"
                    bg-color="white"
                    input-class="text-black"
                    color="blue-7"
                  >
                  </q-select>
                </q-card-section>
                <q-card-actions align="center">
                  <!-- <q-btn flat label="Cancel" color="primary" @click="cancelDetail"/> -->
                  <!-- <q-btn flat label="Save" color="primary"  type="submit" /> -->
                  <q-btn
                    color="blue-7"
                    :label="isNewRecord ? 'Add' : 'Update'"
                    no-caps
                    dense
                    rounded
                    class="q-mt-xs"
                    style="width: 100px; height:40px"
                    type="submit"
                  />
                </q-card-actions>
              </q-card>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </template>
  </q-page>
</template>

<style lang="stylus">
.my-sticky-dynamic
  /* height or max-height is important */
  height: calc(100vh - 62px)

  .q-table__top,
  .q-table__bottom
    background-color: #3E444E
    color: white
    border-radius: 0px !important

  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #272B33
    color: white

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

.table-top-mobile
  height: calc(100vh - 135px) !important
  .q-table__top
    height: 104px !important
</style>

<script>

import { api } from 'src/boot/api'
import { Loading, date, exportFile } from 'quasar'
// import monthpicker from 'quasar-monthpicker'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')

  return `"${formatted}"`
}

export default {
  name: 'MonthlyReportList',
  components: {
    // monthpicker
  },
  data () {
    return {
      filter: '',
      fromDate: '',
      fromDateAPI: '',
      endDate: '',
      endDateAPI: '',
      showDetail: false,
      pagination: {
        sortBy: 'report_date',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      columns: [
        // { name: 'index', required: true, label: 'No', align: 'left', field: 'index', sortable: true },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date' },
        // { name: 'user_name', required: true, label: 'MANAGER', align: 'left', field: 'user_name', sortable: true },
        { name: 'courier_name', required: true, label: 'DRIVER', align: 'left', field: 'courier_name' },
        { name: 'route_number', required: true, label: 'ROUTE', align: 'left', field: 'route_number' },
        { name: 'is_group', required: true, label: 'TYPE', align: 'left', field: 'is_group' }
      ],
      columns_admin: [
        // { name: 'index', required: true, label: 'No', align: 'left', field: 'index', sortable: true },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date' },
        { name: 'user_name', required: true, label: 'USER', align: 'left', field: 'user_name' },
        { name: 'courier_name', required: true, label: 'DRIVER', align: 'left', field: 'courier_name' },
        { name: 'route_number', required: true, label: 'ROUTE', align: 'left', field: 'route_number' },
        { name: 'is_group', required: true, label: 'TYPE', align: 'left', field: 'is_group' }
      ],
      monthlyList: [],
      selectedRecord: {
        id: '',
        report_date: '',
        report_title: '',
        courier_id: '',
        route_id: ''
      },
      isNewRecord: false,
      dialogTitle: '',
      routes: [],
      couriers: [],
      filteredNames: [],
      rnc_id: '',
      is_mobile: false
    }
  },
  computed: {
    // ...mapFields('commons', ['pageMeta'])
    userLevel: {
      get () {
        return this.$store.state.auth.userLevel
      }
    }
  },
  mounted () {
    this.checkPlatform()
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.fromDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
    this.fromDateAPI = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.endDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
    this.endDateAPI = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.getMonthlyAll({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    checkPlatform () {
      // this.is_mobile = this.$q.platform.is.mobile
      if (this.$q.platform.is.mobile) {
        this.is_mobile = true
      } else {
        this.is_mobile = false
      }
      console.log('dddddddddddddd', this.is_mobile)
    },
    onFromDateChanged (fromdate) {
      this.fromDateAPI = date.formatDate(date.extractDate(fromdate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
      this.getMonthlyAll({
        pagination: this.pagination,
        filter: undefined
      })
    },
    onEndDateChanged (enddate) {
      this.endDateAPI = date.formatDate(date.extractDate(enddate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
      this.getMonthlyAll({
        pagination: this.pagination,
        filter: undefined
      })
    },
    async goToSingleDetail (data) {
      await this.getCourierList()
      await this.getExtraRoutes()
      if (data.is_group === 1) {
        this.$router.push({ name: 'Edit Schedule', params: { report_no: data.report_no } })
      } else {
        this.isNewRecord = false
        this.filteredNames = this.couriers
        this.dialogTitle = 'Edit Extra Route'
        this.selectedRecord.id = data.id
        this.selectedRecord.courier_id = data.courier_id
        this.selectedRecord.route_id = data.route_id
        this.selectedRecord.report_date = data.report_date
      }
      this.showDetail = true
    },
    addGroup () {
      this.$router.push('/dashboard/schedules/new')
    },
    cancelDetail () {
      this.showDetail = false
      this.selectedRecord = {}
    },
    async onSubmit () {
      // this.selectedRecord.report_date = date.formatDate(date.addToDate(this.selectedRecord.report_date, { days: 1 }), 'YYYY-MM-DD')
      if (!this.selectedRecord.courier_id) {
        this.selectedRecord.courier_id = 'RNC'
      }
      const params = {
        data: this.selectedRecord
      }
      params.conditions = {
        id: this.selectedRecord.id
      }
      Loading.show()
      try {
        let res = await api.updateSingleRecord(params)
        Loading.hide()
        console.log('result', res.data)
      } catch (error) {
        Loading.hide()
        console.log('error', error)
      }
      this.cancelDetail()
      this.getMonthlyAll({
        pagination: this.pagination,
        filter: this.filter
      })
      console.log('selected record', this.selectedRecord)
    },
    getExtraRoutes: async function () {
      Loading.show()
      try {
        let res = await api.getExtraRoutes()
        Loading.hide()
        this.routes = res.data.data
      } catch (e) {
        Loading.hide()
        // this.$router.push('/dashboard/schedules')
      }
    },
    getCourierList: async function () {
      Loading.show()
      try {
        let res = await api.getCourierList()
        Loading.hide()
        this.couriers = res.data.data
      } catch (e) {
        Loading.hide()
        // this.$router.push('/dashboard/schedules')
      }
    },
    // filterFn (val, update, abort) {
    //   update(() => {
    //     if (val === '') {
    //       this.filteredNames = []
    //     } else {
    //       const needle = val.toLowerCase()
    //       this.filteredNames = this.couriers.filter(name => name.courier_name.toLowerCase().indexOf(needle) > -1)
    //       this.filteredNames = this.filteredNames.slice(0, 3)
    //     }
    //   })
    // },
    filterFn (val, update, abort) {
      update(() => {
        if (val === '') {
          this.filteredNames = []
        } else {
          const needle = val.toLowerCase()
          this.filteredNames = this.couriers.filter(name => name.courier_name.toLowerCase().indexOf(needle) > -1)
          this.filteredNames = this.filteredNames.slice(0, 3)
        }
      },
      ref => {
        if (val !== '' && ref.options.length > 0) {
          const matchedName = ref.options.find(item => item.courier_name.toLowerCase() === val.toLowerCase())
          if (matchedName) {
            ref.add(matchedName)
          }
        }
      })
    },
    // goToDetail (id) {
    //   this.$router.push({ name: 'Edit Schedule', params: { id: id } })
    // },
    getMonthlyAll: async function (props) {
      let { page, rowsPerPage, sortBy, descending } = props.pagination
      let filter = props.filter

      const params = {
        conditions: {
        },
        sortBy: sortBy,
        descending: descending,
        fromDate: this.fromDateAPI,
        endDate: this.endDateAPI
      }
      if (filter) {
        params.conditions.filter = filter
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getMonthlyReportsAll(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.monthlyList = res.data.data
        this.monthlyList.forEach((row, index) => {
          row.index = index + 1
        })

        // update rowsCount with appropriate value
        this.pagination.rowsNumber = res.data.totalCount

        // don't forget to update local pagination object
        this.pagination.page = page
        this.pagination.rowsPerPage = rowsPerPage
        this.pagination.sortBy = sortBy
        this.pagination.descending = descending

        // ...and turn of loading indicator
      } catch (e) {
        Loading.hide()
        console.log('errorrrrrrrrrr', e)
      }
    },
    remove (report) {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + report.report_title + '?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const params = {
          conditions: {
            id: report.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeReport(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: report.report_title + ' is removed successfully !'
          })
          this.getMonthlyAll({
            pagination: this.pagination,
            filter: undefined
          })
        } catch (e) {
          Loading.hide()
        }
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    },
    exportTable () {
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.monthlyList.map(row => this.columns.map(col => {
          if (col.field === 'is_group') {
            return wrapCsvValue(
              row.is_group === 1 ? 'FD Routes' : 'Extra Routes',
              col.format
            )
          } else {
            return wrapCsvValue(
              row[col.field],
              col.format
            )
          }
        }).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.xls',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    }
  },
  created () {
  }
}
</script>
