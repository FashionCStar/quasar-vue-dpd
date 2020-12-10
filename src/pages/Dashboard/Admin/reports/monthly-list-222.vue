<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
          class="my-sticky-dynamic"
          title="Treats"
          :data="monthlyList"
          :columns="columns"
          :loading="loading"
          row-key="index"
          :filter="filter"
          virtual-scroll
          :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48"
          :pagination.sync="pagination"
          :rows-per-page-options="[0]"
          @virtual-scroll="onScroll"
        >
          <template v-slot:top>
            <div class="col-6 row justify-start">
              <q-btn
                color="primary"
                icon-right="archive"
                label="Export"
                no-caps
                dense
                @click="exportTable"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:40px"
              />
              <q-btn
                color="primary"
                label="Single Record"
                no-caps
                dense
                @click="goToSingleDetail()"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:40px"
              />
              <q-btn
                color="primary"
                label="Group Record"
                no-caps
                dense
                @click="addGroup"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:40px"
              />
            </div>
            <div class="col-6 row justify-end">
              <div class="items-center q-ml-xs">
                <q-input dense debounce="300" v-model="filter" placeholder="Search" style="width:150px;" class="q-mt-xs">
                  <template v-slot:append> <q-icon name="search" /> </template>
                </q-input>
              </div>
              <div class="items-center q-ml-xs">
                <q-input dense v-model="fromDate" color="cyan-7" type="date" style="width:151px;" class="q-mt-xs" />
              </div>
              <div class="items-center q-ml-xs">
                <q-input dense v-model="endDate" color="cyan-7" type="date" style="width:151px;" class="q-mt-xs" />
              </div>
            </div>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click="goToSingleDetail(props.row)">
              <!-- <q-td key="index" :props="props">{{ props.row.index }}</q-td> -->
              <q-td key="report_date" :props="props">{{ props.row.report_date }}</q-td>
              <q-td v-if="userLevel === 'admin'" key="user_name" :props="props">{{ props.row.user.name }}</q-td>
              <q-td key="courier_name" :props="props">{{ props.row.courier_name }}</q-td>
              <q-td key="route_number" :props="props">{{ props.row.route_number }}</q-td>
              <q-td key="option" :props="props">{{ props.row.report_no ? 'Group':'Single' }}</q-td>
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
        </q-table>
      </div>
      <q-dialog
        v-model="showDetail"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card>
          <q-card-section>
            <div class="text-h6">{{dialogTitle}}</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form
              @submit="onSubmit"
              ref="selectedRecord"
              :model="selectedRecord"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-input dense outlined v-model="selectedRecord.report_date" v-if="isNewRecord" color="cyan-7" class="q-mb-xs" type="date" />
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
                    color="cyan-7"
                    class="q-mb-xs"
                    behavior="menu"
                  >
                  </q-select>
                  <q-select
                    dense
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
                    color="cyan-7"
                    class="q-mb-xs"
                    behavior="menu"
                  >
                  </q-select>
                </div>
              </div>
              <q-separator />
              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="primary" @click="cancelDetail"/>
                <q-btn flat label="Save" color="primary"  type="submit" />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </template>
  </q-page>
</template>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 600px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
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
      endDate: '',
      showDetail: false,
      nextPage: 2,
      lastPage: 1,
      pageSize: 10,
      loading: false,
      pagination: {
        sortBy: 'report_date',
        descending: false,
        page: 1,
        rowsPerPage: 0,
        rowsNumber: 20
      },
      columns: [
        // { name: 'index', required: true, label: 'No', align: 'left', field: 'index', sortable: true },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date', sortable: true },
        // { name: 'user_name', required: true, label: 'MANAGER', align: 'center', field: 'user_name', sortable: true },
        { name: 'courier_name', required: true, label: 'COURIER', align: 'center', field: 'courier_name', sortable: true },
        { name: 'route_number', required: true, label: 'ROUTE', align: 'center', field: 'route_number', sortable: true },
        { name: 'option', required: true, label: 'OPTION', align: 'center', field: 'option' }
      ],
      columns_admin: [
        // { name: 'index', required: true, label: 'No', align: 'left', field: 'index', sortable: true },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date', sortable: true },
        { name: 'user_name', required: true, label: 'MANAGER', align: 'center', field: 'user_name', sortable: true },
        { name: 'courier_name', required: true, label: 'COURIER', align: 'center', field: 'courier_name', sortable: true },
        { name: 'route_number', required: true, label: 'ROUTE', align: 'center', field: 'route_number', sortable: true },
        { name: 'option', required: true, label: 'OPTION', align: 'center', field: 'option' }
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
      filteredNames: []
    }
  },
  watch: {
    fromDate: {
      handler: function (after, before) {
        // this.selectedDate = date.formatDate(after, 'YYYY/MM')
        this.getMonthlyList({
          pagination: this.pagination,
          filter: this.filter
        })
      },
      deep: true
    },
    endDate: {
      handler: function (after, before) {
        // this.selectedDate = date.formatDate(after, 'YYYY/MM')
        this.getMonthlyList({
          pagination: this.pagination,
          filter: this.filter
        })
      },
      deep: true
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
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.fromDate = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.endDate = date.formatDate(new Date(), 'YYYY-MM-DD')
  },
  methods: {
    async goToSingleDetail (data) {
      await this.getCourierList()
      await this.getRouteList()
      if (data) {
        if (data.report_no) {
          this.$router.push({ name: 'ReportDetail', params: { report_no: data.report_no } })
        } else {
          this.isNewRecord = false
          this.filteredNames = this.couriers
          this.dialogTitle = 'Edit Record'
          this.selectedRecord.id = data.id
          this.selectedRecord.courier_id = data.courier_id
          this.selectedRecord.route_id = data.route_id
          this.selectedRecord.report_date = data.report_date
        }
      } else {
        this.dialogTitle = 'Add New Record'
        this.isNewRecord = true
        this.selectedRecord.report_date = date.formatDate(new Date(), 'YYYY-MM-DD')
        this.selectedRecord.courier_id = ''
        this.selectedRecord.route_id = ''
      }
      this.showDetail = true
    },
    addGroup () {
      this.$router.push({ path: 'reports/new' })
    },
    cancelDetail () {
      this.showDetail = false
      this.selectedRecord = {}
    },
    async onSubmit () {
      this.selectedRecord.report_date = date.formatDate(date.addToDate(this.selectedRecord.report_date, { days: 1 }), 'YYYY-MM-DD')
      if (!this.selectedRecord.courier_id) {
        this.selectedRecord.courier_id = 'RNC'
      }
      const params = {
        data: this.selectedRecord
      }
      if (!this.isNewRecord) {
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
        // this.$router.push('/dashboard/reports')
      } else {
        Loading.show()
        try {
          let res = await api.createSingleRecord(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        // this.$router.push('/dashboard/reports')
      }
      this.cancelDetail()
      this.getMonthlyList({
        pagination: this.pagination,
        filter: this.filter
      })
      console.log('selected record', this.selectedRecord)
    },
    getRouteList: async function () {
      Loading.show()
      try {
        let res = await api.getRouteList()
        Loading.hide()
        this.routes = res.data.data
      } catch (e) {
        Loading.hide()
        // this.$router.push('/dashboard/reports')
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
        // this.$router.push('/dashboard/reports')
      }
    },
    filterFn (val, update, abort) {
      update(() => {
        if (val === '') {
          this.filteredNames = []
        } else {
          const needle = val.toLowerCase()
          this.filteredNames = this.couriers.filter(name => name.courier_name.toLowerCase().indexOf(needle) > -1)
          this.filteredNames = this.filteredNames.slice(0, 3)
        }
      })
    },
    // goToDetail (id) {
    //   this.$router.push({ name: 'ReportDetail', params: { id: id } })
    // },
    onScroll ({ to, ref }) {
      const lastIndex = this.monthlyList.length - 1
      this.lastPage = Math.ceil(this.monthlyList.length / this.pageSize)

      console.log('scrolling222')
      if (this.loading !== true && this.nextPage < this.lastPage && to === lastIndex) {
        this.loading = true

        console.log('scrolling111')
        this.loading = false
      }
    },
    getMonthlyList: async function (props) {
      this.fromDate = date.formatDate(date.addToDate(this.fromDate, { days: 1 }), 'YYYY-MM-DD')
      this.endDate = date.formatDate(date.addToDate(this.endDate, { days: 1 }), 'YYYY-MM-DD')
      let { page, sortBy, descending } = props.pagination
      let filter = props.filter

      const params = {
        conditions: {
        },
        sortBy: sortBy,
        descending: descending,
        fromDate: this.fromDate,
        endDate: this.endDate
        // selectedDate: date.formatDate(this.selectedDate, 'YYYY/MM')
      }
      if (filter) {
        params.conditions.filter = filter
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getMonthlyReports(params)
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
          this.getReportList({
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
        this.monthlyList.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
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
