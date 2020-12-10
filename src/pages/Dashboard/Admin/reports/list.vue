<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
          :data="reportList"
          :columns="columns"
          row-key="report_date"
          :pagination.sync="pagination"
          :filter="filter"
          @request="getReportList"
          binary-state-sort
        >
          <template v-slot:top>
            <div class="col-6 row justify-start">
              <q-input dense debounce="300" v-model="filter" placeholder="Search" style="width: 120px">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
              &nbsp;
              <q-btn
                color="primary"
                label="Add Record"
                no-caps
                dense
                @click="showAddRecordDlg"
                class="q-mt-xs"
                style="width: 120px; height:40px"
              />
              <!-- <q-btn
                color="primary"
                label="Single Record"
                no-caps
                dense
                @click="goToDetail()"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:40px"
              />
              <q-btn
                color="primary"
                label="Group Record"
                no-caps
                dense
                @click="createNew"
                class="q-mr-xs q-mt-xs"
                style="width: 100px; height:40px"
              /> -->
            </div>
            <div class="col-6 row justify-end">
              <q-input dense v-model="fromDate" style="width:120px;">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <div>
                        <q-calendar
                          ref="calendar"
                          v-model="fromDate"
                          show-work-weeks
                          view="month"
                          mini-mode
                          bordered
                          @input="onFromDateChanged"
                          locale="en-us"
                          :class="$q.dark.isActive ? 'bg-blue-grey-3': 'bg-grey-1' "
                          style="max-width: 300px; max-height:180px; min-width: auto; overflow: hidden; "
                        />
                      </div>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-input dense v-model="endDate" style="width:120px;" class="q-ml-xs">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-calendar
                        ref="calendar"
                        v-model="endDate"
                        show-work-weeks
                        view="month"
                        mini-mode
                        bordered
                        @input="onEndDateChanged"
                        locale="en-us"
                        :class="$q.dark.isActive ? 'bg-blue-grey-3': 'bg-grey-1' "
                        style="max-width: 300px; max-height:180px; min-width: auto; overflow: hidden"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <!-- <q-input dense debounce="300" v-model="filter" placeholder="Search">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input> -->
              <!-- <q-btn
                color="primary"
                label="New Report"
                no-caps
                dense
                style="width: 100px; height:40px;"
                class="q-ml-xs q-mt-xs"
                @click="createNew()"
              /> -->
            </div>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click.native="goToDetail(props.row)">
              <!-- <q-td key="no" :props="props">{{ props.row.index }}</q-td> -->
              <q-td key="report_date" :props="props">{{ props.row.report_date }}</q-td>
              <q-td key="user_name" :props="props">{{ props.row.user.name }}</q-td>
              <q-td key="type" :props="props">{{ props.row.is_group === 1 ? 'FD Routes' : 'Extra Routes' }}</q-td>
              <q-td key="buttons" :props="props">
                <q-btn
                  rounded
                  :icon=" 'fas fa-pen-alt' "
                  @click.native.stop
                  @click="goToDetail(props.row)"
                />
                <q-btn
                  rounded
                  :icon=" 'fas fa-trash-alt' "
                  @click.native.stop
                  @click="remove(props.row)"
                />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
      <q-dialog
        v-model="showAddDlg"
        persistent
        :maximized="true"
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card>
          <q-bar>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <div class="layout-center">
            <q-card-section>
              <div class="text-h6 text-center">What kind of record do you want to add?</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-option-group
                :options="add_options"
                type="radio"
                v-model="selectedOption"
                size="xl"
                style="width: 140px"
                class="q-mx-auto"
              />
            </q-card-section>
            <q-card-section class="text-center q-pt-none">
              <q-btn
                color="primary"
                label="Add"
                no-caps
                dense
                rounded
                @click="addRecord"
                class="q-mt-xs"
                style="width: 100px; height:40px"
              />
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="showDetail"
        persistent
        :maximized="true"
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card>
          <q-bar>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
            <div class="text-h6">{{dialogTitle}}</div>
          </q-bar>
          <!-- <q-card-section>
            <div class="text-h6">{{dialogTitle}}</div>
          </q-card-section> -->

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form
              @submit="onSubmit"
              ref="selectedRecord"
              :model="selectedRecord"
              style="max-width: 400px; margin: auto;"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <!-- <q-input dense outlined v-model="selectedRecord.report_date" v-if="isNewRecord" color="cyan-7" class="q-mb-xs" type="date" /> -->
                  <q-input dense outlined v-model="selectedRecord.report_date">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-calendar
                            ref="calendar"
                            v-model="selectedRecord.report_date"
                            show-work-weeks
                            view="month"
                            mini-mode
                            bordered
                            locale="en-us"
                            :class="$q.dark.isActive ? 'bg-blue-grey-3': 'bg-grey-1' "
                            style="max-width: 300px; max-height:180px; min-width: auto; overflow: hidden"
                          />
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <q-separator class="q-my-md" />
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
                    color="cyan-7"
                    class="q-mb-xs"
                    behavior="menu"
                  >
                  </q-select>
                </div>
              </div>
              <q-card-actions align="center">
                <!-- <q-btn flat label="Cancel" color="primary" @click="cancelDetail"/> -->
                <!-- <q-btn flat label="Save" color="primary"  type="submit" /> -->
                <q-btn
                  color="primary"
                  :label="isNewRecord ? 'Add' : 'Update'"
                  no-caps
                  dense
                  rounded
                  class="q-mt-xs"
                  style="width: 100px; height:40px"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
    </template>
  </q-page>
</template>

<style lang="stylus">
.q-btn__wrapper
  padding 4px 6px
.layout-center
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding-left: 25px;
  padding-right: 25px;
</style>

<script>

import { api } from 'src/boot/api'
import { Loading, date } from 'quasar'

export default {
  name: 'ReportList',
  data () {
    return {
      filter: '',
      showDetail: false,
      showAddDlg: false,
      add_options: [
        { label: 'FD routes', value: 'fd_routes' },
        { label: 'Extra route', value: 'extra_route' }
      ],
      selectedOption: '',
      pagination: {
        sortBy: 'report_date',
        descending: true,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      fromDate: '',
      endDate: '',
      columns: [
        // { name: 'no', required: true, label: 'No', align: 'left', field: 'no', sortable: true },
        { name: 'report_date', required: true, label: 'Date', align: 'left', field: 'report_date', sortable: true },
        { name: 'user_name', required: true, label: 'User', align: 'center', field: 'user_name', sortable: true },
        { name: 'type', required: true, label: 'Type', align: 'center', field: 'type' },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      reportList: [],
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
      },
      deep: true
    },
    endDate: {
      handler: function (after, before) {
        // this.selectedDate = date.formatDate(after, 'YYYY/MM')
      },
      deep: true
    }
  },
  mounted () {
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.fromDate = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.endDate = date.formatDate(new Date(), 'YYYY-MM-DD')
    this.getReportList({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    createNew () {
      this.$router.push({ path: 'reports/new' })
    },
    // goToDetail (reportNo) {
    //   this.$router.push({ name: 'ReportDetail', params: { report_no: reportNo } })
    // },
    showAddRecordDlg () {
      this.showAddDlg = true
    },
    hideAddRecordDlg () {
      this.showAddDlg = false
      this.selectedOption = ''
    },
    onFromDateChanged (date) {
      this.getReportList({
        pagination: this.pagination,
        filter: undefined
      })
    },
    onEndDateChanged (date) {
      this.getReportList({
        pagination: this.pagination,
        filter: undefined
      })
    },
    addRecord () {
      if (this.selectedOption === 'extra_route') {
        this.goToDetail()
      } else if (this.selectedOption === 'fd_routes') {
        this.$router.push({ path: 'reports/new' })
      }
    },
    async goToDetail (data) {
      await this.getCourierList()
      await this.getExtraRoutes()
      if (data) {
        if (data.is_group === 1) {
          this.$router.push({ name: 'ReportDetail', params: { report_no: data.report_no } })
        } else {
          this.isNewRecord = false
          this.filteredNames = this.couriers
          this.dialogTitle = 'Edit Extra Route'
          this.selectedRecord.id = data.id
          this.selectedRecord.courier_id = data.courier_id
          this.selectedRecord.route_id = data.route_id
          this.selectedRecord.report_date = data.report_date
        }
      } else {
        this.dialogTitle = 'Add Extra Route'
        this.isNewRecord = true
        this.selectedRecord.report_date = date.formatDate(new Date(), 'YYYY-MM-DD')
        this.selectedRecord.courier_id = ''
        this.selectedRecord.route_id = ''
      }
      this.showDetail = true
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
        this.$router.push('/dashboard/reports')
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
      this.hideAddRecordDlg()
      this.getReportList({
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
    getReportList: async function (props) {
      // this.fromDate = date.formatDate(date.addToDate(this.fromDate, { days: 1 }), 'YYYY-MM-DD')
      // this.endDate = date.formatDate(date.addToDate(this.endDate, { days: 1 }), 'YYYY-MM-DD')
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let filter = props.filter

      // get all rows if "All" (0) is selected
      let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

      // calculate starting row of driverList
      let startRow = (page - 1) * rowsPerPage

      const params = {
        conditions: {},
        start: startRow,
        numPerPage: fetchCount,
        sortBy: sortBy,
        descending: descending,
        fromDate: this.fromDate,
        endDate: this.endDate
      }
      if (filter) {
        params.conditions.filter = filter
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getReports(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.reportList = res.data.data
        this.reportList.forEach((row, index) => {
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
            report_no: report.report_no
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
    }
  },
  created () {
  }
}
</script>
