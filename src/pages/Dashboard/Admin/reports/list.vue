<template>
  <q-page>
    <template>
      <div>
        <q-table
          :class="is_mobile === 'ios'?'my-sticky-dynamic table-top-ios':is_mobile==='android'?'my-sticky-dynamic table-top-android': 'my-sticky-dynamic'"
          :data="reportList"
          :columns="userLevel !== 'user' ? columns_admin : columns"
          row-key="report_date"
          :filter="filter"
          @request="getReportList"
          binary-state-sort
          :pagination.sync="pagination"
          virtual-scroll
          :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48"
          :rows-per-page-options="[0]"
          @virtual-scroll="onScroll"
        >
          <template v-slot:top>
            <div class="col-6 row justify-start">
              <q-btn
                color="blue-7"
                label="+Add Record"
                no-caps
                dense
                rounded
                @click="showAddRecordDlg"
                style="width: 168px; height:40px;"
              />
            </div>
            <div class="col-6 row justify-end">
              <q-input dense v-model="fromDate" style="width:168px;" input-class="text-white" color="blue-7" class="q-mb-sm">
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
              <q-input dense v-model="endDate" style="width:168px;" input-class="text-white" class="q-ml-xs q-mb-sm" color="blue-7">
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
            <q-tr :props="props" @click.native="props.row.is_group === 1 ? goToDailyDetail(props.row) : goToExtraDetail(props.row)">
              <q-td key="no" :props="props">{{ props.row.index }}</q-td>
              <q-td key="report_date" :props="props" class="text-uppercase">{{ changeDateFormat(props.row.report_date) }}</q-td>
              <q-td key="is_group" :props="props">{{ props.row.is_group === 1 ? 'DAILY' : 'EXTRA' }}</q-td>
              <q-td v-if="userLevel !== 'user'" key="full_name" :props="props">{{ props.row.user.name }}</q-td>
              <q-td key="buttons" :props="props">
                <q-btn
                  rounded
                  flat
                  :icon=" 'fas fa-pen-alt' "
                  @click.native.stop
                  @click="props.row.is_group === 1 ? goToDailyDetail(props.row) : goToExtraDetail(props.row)"
                />
              </q-td>
            </q-tr>
          </template>

          <template v-slot:bottom>
            <div class="col-12 row justify-between">
              <div class="q-my-auto">
                <!-- <q-btn
                  label="Export"
                  no-caps
                  dense
                  rounded
                  outline
                  @click="exportTable"
                  class="q-ma-none"
                  style="width: 60px; height:30px;"
                /> -->
              </div>
              <div class="row justify-end items-center">
                Total Records: {{pagination.rowsNumber}}
              </div>
            </div>
          </template>
        </q-table>
      </div>
      <q-dialog
        v-model="showAddDlg"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E; max-width: 500px; min-width: 352px; min-height: 500px">
          <q-bar style="background-color: #272B33">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-separator />

          <div class="layout-center">
            <q-card-section>
              <div class="text-h6 text-white text-center">What kind of record do you want to add?</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <q-option-group
                :options="add_options"
                type="radio"
                v-model="selectedOption"
                size="xl"
                style="width: 140px"
                class="q-mx-auto text-white"
                color="white"
                keep-color
              />
            </q-card-section>
            <q-card-section class="text-center q-pt-none">
              <q-btn
                label="Add"
                color="blue-7"
                no-caps
                dense
                rounded
                @click="addRecord"
                class="q-mt-xs"
                style="width: 100px; height:40px;"
              />
            </q-card-section>
          </div>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="showExtraDetail"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E; max-width: 500px; min-height: 500px">
          <q-bar style="background-color: #272B33">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
            <div class="text-h6 text-white">{{extraRecordTitle}}</div>
          </q-bar>

          <q-separator />

          <q-card-section class="scroll">
            <q-form
              @submit="onSubmitExtra"
              ref="selectedRecord"
              :model="selectedRecord"
              style="width: 320px; margin: auto;"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <span class="text-white">Date</span>
                  <q-input dense outlined v-model="extraReportDate" color="blue-7" bg-color="white" input-class="text-black text-center">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="extraReportDate"
                            minimal
                            @input="onExtraReportDateChanged"
                            mask="DD/MM/YY ddd"
                            color="blue-7"
                          >
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <div v-if="userLevel === 'admin' || userLevel === 'client'">
                    <q-separator class="q-my-md" color="grey-4" />
                    <span class="text-white">Depot Location</span>
                    <q-select
                      dense
                      outlined
                      v-model="depot_id"
                      fill-input
                      :options="depots"
                      :option-value="(opt) => (opt === null ? null : opt.id)"
                      :option-label="(opt) => (opt === null ? '- Null -' : opt.depot_location)"
                      emit-value
                      map-options
                      label-color="grey-7"
                      class="q-ma-none q-pb-md"
                      behavior="menu"
                      bg-color="white"
                      input-class="text-black"
                      color="blue-7"
                      @input="changeDepot"
                    >
                      <template v-slot:append>
                        <q-icon
                          v-if="depot_id !== ''"
                          class="cursor-pointer"
                          name="clear"
                          @click="removeSelectedDepot()"
                        />
                      </template>
                    </q-select>
                  </div>
                  <q-separator class="q-my-md" color="grey-4" />
                  <div v-if="(depot_id !== '' || userLevel === 'user') && (extraRoutes.length)">
                    <span class="text-white">Driver</span>
                    <q-select
                      dense
                      required
                      outlined
                      v-model="selectedRecord.driver_id"
                      use-input
                      hide-selected
                      fill-input
                      :options="filteredDriverNames"
                      :option-value="opt => opt === null ? null : opt.id"
                      :option-label="opt => opt === null ? '- Null -' : opt.driver_name"
                      emit-value
                      map-options
                      @filter="filterFnDrivers"
                      class="q-mb-xs"
                      behavior="menu"
                      bg-color="white"
                      input-class="text-black"
                      color="blue-7"
                      :hide-dropdown-icon="true"
                    >
                    </q-select>
                    <span class="text-white">Route</span>
                    <q-select
                      dense
                      required
                      outlined
                      v-model="selectedRecord.route_id"
                      :options="extraRoutes"
                      :option-value="opt => opt === null ? null : opt.id"
                      :option-label="opt => opt === null ? '- Null -' : opt.route_number"
                      emit-value
                      map-options
                      class="q-mb-xs"
                      behavior="menu"
                      bg-color="white"
                      input-class="text-black"
                      color="blue-7"
                      :hide-dropdown-icon="true"
                    >
                    </q-select>
                  </div>
                </div>
              </div>
              <q-card-actions align="center">
                <q-btn
                  no-caps
                  dense
                  rounded
                  v-if="!isNewExtraRecord"
                  label="Delete"
                  color="blue-7"
                  @click="removeExtra"
                  style="width: 100px; height:40px;"
                />
                <q-btn
                  :label="isNewExtraRecord ? 'Add' : 'Update'"
                  color="blue-7"
                  no-caps
                  dense
                  rounded
                  style="width: 100px; height:40px;"
                  type="submit"
                />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="showDailyDetail"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E; max-width: 500px; min-height: 500px">
          <q-bar style="background-color: #272B33">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
            <div class="text-h6 text-white">{{dailyRecordTitle}}</div>
          </q-bar>

          <q-separator />

          <q-card-section style="max-height: 80vh" class="scroll">
            <q-form
              @submit="onSubmitDaily"
              ref="dailyReportForm"
              :model="dailyReportForm"
              style="width: 320px; margin: auto;"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <span class="text-white">Date</span>
                  <q-input dense outlined v-model="dailyReportDate" bg-color="white" color="blue-7" class="q-py-none" input-class="text-black">
                    <template v-slot:append>
                      <q-icon name="event" class="cursor-pointer" color="black">
                        <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                          <q-date v-model="dailyReportDate"
                            minimal
                            @input="onDailyReportDateChanged"
                            mask="DD/MM/YY ddd"
                            color="blue-7"
                          >
                          </q-date>
                        </q-popup-proxy>
                      </q-icon>
                    </template>
                  </q-input>
                  <div v-if="userLevel === 'admin' || userLevel === 'client'">
                    <q-separator class="q-my-md" color="grey-4" />
                    <span class="text-white">Depot Location</span>
                    <q-select
                      dense
                      outlined
                      v-model="depot_id"
                      fill-input
                      :options="depots"
                      :option-value="(opt) => (opt === null ? null : opt.id)"
                      :option-label="(opt) => (opt === null ? '- Null -' : opt.depot_location)"
                      emit-value
                      map-options
                      label-color="grey-7"
                      class="q-ma-none q-pb-md"
                      behavior="menu"
                      bg-color="white"
                      input-class="text-black"
                      color="blue-7"
                      @input="changeDepot"
                    >
                      <template v-slot:append>
                        <q-icon
                          v-if="depot_id !== ''"
                          class="cursor-pointer"
                          name="clear"
                          @click="removeSelectedDepot()"
                        />
                      </template>
                    </q-select>
                  </div>
                  <q-separator class="q-mt-md" color="grey-4" />
                  <div v-if="depot_id !== '' || userLevel === 'user'">
                    <div v-for="(data, index) in dailyReportForm.report_data" :key="data.route_id" class="q-pt-md">
                      <span class="text-white">Driver</span>
                      <q-select
                        dense
                        outlined
                        v-model="data.driver_id"
                        use-input
                        hide-selected
                        fill-input
                        :options="filteredDriverNames"
                        :option-value="opt => opt === null ? null : opt.id"
                        :option-label="opt => opt === null ? '- Null -' : opt.driver_name"
                        emit-value
                        map-options
                        @filter="filterFnDrivers"
                        label-color="grey-7"
                        class="q-ma-none q-pb-md"
                        behavior="menu"
                        bg-color="white"
                        input-class="text-black"
                        :rules="[ val => checkDriverDuplicates(val) || 'This record is duplicated' ]"
                        :hide-dropdown-icon="true"
                        color="blue-7"
                      >
                        <template v-slot:append>
                          <q-icon
                            v-if="data.driver_id !== ''"
                            class="cursor-pointer"
                            name="clear"
                            @click="removeSelectedDriver(index)"
                          />
                        </template>
                      </q-select>
                      <div class="row">
                        <div class="col-6 q-pr-sm">
                          <span class="text-white">Route</span>
                          <q-input required dense outlined bg-color="blue-grey-4" class="q-pb-md" input-class="text-white q-pr-xl" label-color="grey-3" color="blue-7" :value="data.route_number" disable></q-input>
                        </div>
                        <div class="col-6 q-pl-sm">
                          <span class="text-white">Stops</span>
                          <q-input dense outlined bg-color="white" class="q-pb-md" input-class="text-black q-pr-xl" label-color="grey-3" color="blue-7" v-model="data.stops"></q-input>
                        </div>
                      </div>
                      <q-separator color="grey-4" v-if="index < dailyReportForm.report_data.length-1" />
                    </div>
                  </div>
                </div>
              </div>
              <q-card-actions align="center">
                <div class="q-px-md">
                  <q-btn
                    v-if="!isNewDailyRecord"
                    no-caps
                    dense
                    rounded
                    label="Delete"
                    color="blue-7"
                    @click="removeDaily(dailyReportForm.report_no)"
                    style="width: 100px; height:40px;"
                  /> &nbsp;
                  <q-btn
                    color="blue-7"
                    :label="isNewDailyRecord ? 'Add' : 'Update'"
                    no-caps
                    dense
                    rounded
                    style="width: 100px; height:40px"
                    type="submit"
                  />
                </div>
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="showEmptyConfirm"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E; max-width: 500px; min-width: 370px; min-height: 90vh;">
          <q-bar style="background-color: #272B33">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <div class="layout-center">
            <q-card-section class="text-white">
              <div class="text-h6 text-center">You did not provide the driver name of the routes {{checkEmptyDrivers().join(', ')}}.</div>
              <div class="text-h6 text-center">Do you want to continue?</div>
            </q-card-section>

            <q-card-section class="text-center q-pt-none">
              <q-btn
                color="blue-7"
                label="Back"
                no-caps
                dense
                rounded
                @click="showEmptyConfirm = false"
                class="q-mt-xs q-mx-xs"
                style="width: 100px; height:40px"
              />
              <q-btn
                color="blue-7"
                label="Yes"
                no-caps
                dense
                rounded
                @click="addDailyRecords"
                class="q-mt-xs q-mx-xs"
                style="width: 100px; height:40px"
              />
            </q-card-section>
          </div>
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
import { Loading, date, exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  console.log('csv', val)
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
  name: 'ReportList',
  data () {
    return {
      filter: '',
      showExtraDetail: false,
      showDailyDetail: false,
      showAddDlg: false,
      add_options: [
        { label: 'DAILY', value: 'daily' },
        { label: 'EXTRA', value: 'extra' }
      ],
      selectedOption: '',
      pagination: {
        sortBy: 'report_date',
        descending: true,
        page: 1,
        rowsPerPage: 100,
        rowsNumber: 20
      },
      fromDate: '',
      fromDateAPI: '',
      endDate: '',
      endDateAPI: '',
      columns: [
        { name: 'no', required: true, label: 'NO', align: 'left', field: 'no' },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date' },
        { name: 'is_group', required: true, label: 'TYPE', align: 'left', field: 'is_group' },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      columns_admin: [
        { name: 'no', required: true, label: 'NO', align: 'left', field: 'no' },
        { name: 'report_date', required: true, label: 'DATE', align: 'left', field: 'report_date' },
        { name: 'is_group', required: true, label: 'TYPE', align: 'left', field: 'is_group' },
        { name: 'full_name', required: true, label: 'USER', align: 'left', field: 'full_name' },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      reportList: [],
      extraReportDate: '',
      dailyReportDate: '',
      selectedRecord: {
        id: '',
        report_date: '',
        report_title: '',
        driver_id: '',
        route_id: ''
      },
      dailyReportForm: {
        report_date: '',
        report_title: '',
        report_no: '',
        user_id: '',
        report_data: []
      },
      isNewExtraRecord: false,
      isNewDailyRecord: false,
      dailyRecordTitle: '',
      extraRecordTitle: '',
      extraRoutes: [],
      dailyRoutes: [],
      drivers: [],
      filteredDriverNames: [],
      filteredNames: [],
      is_mobile: 'web',
      rnc_id: '',
      isDateFilter: false,
      showEmptyConfirm: false,
      depot_id: '',
      depots: []
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
  async mounted () {
    this.checkPlatform()
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.fromDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
    this.fromDateAPI = date.formatDate(date.startOfDate(new Date(), 'month'), 'YYYY-MM-DD')
    this.endDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
    this.endDateAPI = date.formatDate(new Date(), 'YYYY-MM-DD')
    await this.getReportList({
      pagination: this.pagination,
      filter: undefined
    })

    await this.getRNCID()
    if (this.userLevel === 'user') {
      await this.getDriverList()
      await this.getExtraRoutes()
      await this.getRegularRoutes()
    } else {
      await this.getDepotList()
    }
  },
  methods: {
    // createNew () {
    //   this.$router.push('/dashboard/schedules/new')
    // },
    checkPlatform () {
      if (this.$q.platform.is.mobile) {
        if (this.$q.platform.is.ios) {
          this.is_mobile = 'ios'
        } else {
          this.is_mobile = 'android'
        }
      } else {
        this.is_mobile = 'web'
      }
    },
    changeDateFormat (reportDate) {
      let convertedDate = date.formatDate(date.addToDate(date.extractDate(reportDate, 'YYYY-MM-DD'), { hours: 5 }), 'DD-MM-YY ddd')
      // let convertedDate = date.formatDate(date.extractDate(reportDate, 'YYYY-MM-DD HH:mm:ss'), 'DD-MM-YY ddd HH:mm')
      return convertedDate
    },
    showAddRecordDlg () {
      this.showAddDlg = true
    },
    hideAddRecordDlg () {
      this.showAddDlg = false
      this.selectedOption = ''
    },
    onDailyReportDateChanged (reportDate) {
      this.dailyReportForm.report_date = date.formatDate(date.extractDate(reportDate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
    },
    onExtraReportDateChanged (reportDate) {
      this.selectedRecord.report_date = date.formatDate(date.extractDate(reportDate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
    },
    onFromDateChanged (fromdate) {
      // this.fromDate = date.formatDate(fromdate, 'YYYY-MM-DD')
      this.fromDateAPI = date.formatDate(date.extractDate(fromdate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
      this.isDateFilter = true
      this.pagination.page = 1
      this.getReportList({
        pagination: this.pagination,
        filter: this.filter
      })
    },
    onEndDateChanged (enddate) {
      this.endDateAPI = date.formatDate(date.extractDate(enddate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
      this.isDateFilter = true
      this.pagination.page = 1
      this.getReportList({
        pagination: this.pagination,
        filter: this.filter
      })
    },
    exportTable () {
      // naive encoding to csv format
      let columns = this.userLevel !== 'user' ? this.columns_admin : this.columns
      const content = [ columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.reportList.map(row => columns.map(col => {
          if (col.field === 'is_group') {
            return wrapCsvValue(
              row.is_group === 1 ? 'DAILY' : 'EXTRA',
              col.format
            )
          } else if (col.field === 'user_name') {
            return wrapCsvValue(
              row.user.full_name,
              col.format
            )
          } else if (col.field === 'report_date') {
            return wrapCsvValue(
              row.report_date,
              col.format
            )
          } else {
            return wrapCsvValue(
              row[col.field],
              col.format
            )
          }
        }
        ).join(','))
      ).join('\r\n')

      const status = exportFile(
        'table-export.csv',
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
    },
    addRecord () {
      if (this.selectedOption === 'extra') {
        this.goToExtraDetail()
      } else if (this.selectedOption === 'daily') {
        // this.$router.push('/dashboard/schedules/new')
        this.goToDailyDetail()
      }
    },
    async goToExtraDetail (data) {
      // await this.getRNCID()
      // await this.getDriverList()
      // await this.getExtraRoutes()
      if (data) {
        // if (data.is_group === 1) {
        //   this.$router.push({ name: 'Edit Schedule', params: { report_no: data.report_no } })
        // } else {
        this.isNewExtraRecord = false
        this.filteredDriverNames = this.drivers
        this.extraRecordTitle = 'Edit Extra Route'
        this.selectedRecord.id = data.id
        this.selectedRecord.driver_id = data.driver_id
        this.selectedRecord.route_id = data.route_id
        this.selectedRecord.report_date = data.report_date
        this.extraReportDate = date.formatDate(date.extractDate(data.report_date, 'YYYY-MM-DD'), 'DD/MM/YY ddd')
        // }
      } else {
        this.isNewExtraRecord = true
        this.filteredDriverNames = []
        this.extraRecordTitle = 'Add Extra Route'
        this.selectedRecord.report_date = date.formatDate(new Date(), 'YYYY-MM-DD')
        this.selectedRecord.driver_id = ''
        this.selectedRecord.route_id = ''
        this.depot_id = ''
        this.extraReportDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
      }
      this.showExtraDetail = true
    },
    async goToDailyDetail (data) {
      if (data) {
        this.isNewDailyRecord = false
        this.dailyRecordTitle = 'Edit Daily Record'
        this.filteredDriverNames = this.drivers
        let reportNo = data.report_no
        await this.getReportInfo(reportNo)
        this.dailyReportDate = date.formatDate(date.extractDate(this.dailyReportForm.report_date, 'YYYY-MM-DD'), 'DD/MM/YY ddd')
      } else {
        this.isNewDailyRecord = true
        this.dailyRecordTitle = 'Add Daily Record'
        this.filteredDriverNames = []
        this.depot_id = ''
        this.dailyReportDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
        this.dailyReportForm.report_date = date.formatDate(new Date(), 'YYYY-MM-DD')
        this.dailyReportForm.report_data = this.dailyRoutes.map(route => {
          return { driver_id: '', route_id: route.id, route_number: route.route_number, stops: '' }
        })
      }
      this.showDailyDetail = true
    },
    removeSelectedDriver (index) {
      this.dailyReportForm.report_data[index].driver_id = ''
      // this.dailyReportForm.report_data[index].driver_name = ''
    },
    checkDriverDuplicates (val) {
      if (val) {
        let driverList = this.dailyReportForm.report_data.map((item) => item.driver_id)
        driverList = driverList.filter((item, index) => item !== '' && item !== this.rnc_id)
        let duplicates = driverList.filter((item, index) => item === val && driverList.indexOf(item) !== index)
        if (duplicates.length > 0) return false
        else return true
      } else {
        return true
      }
    },
    checkEmptyDrivers () {
      let emptyList = this.dailyReportForm.report_data.filter((item, index) => item.driver_id === '')
      let emptyRoutes = emptyList.map(item => item.route_number)
      return emptyRoutes
    },
    getReportInfo: async function (reportNo) {
      Loading.show()
      try {
        let res = await api.getReportInfo(reportNo)
        Loading.hide()
        this.reportDate = date.formatDate(date.extractDate(res.data.data[0].report_date, 'YYYY-MM-DD'), 'DD/MM/YY ddd')
        this.dailyReportForm.report_date = res.data.data[0].report_date
        this.dailyReportForm.report_title = res.data.data[0].report_title
        this.dailyReportForm.report_no = res.data.data[0].report_no
        this.dailyReportForm.report_data = res.data.data.map(data => {
          let reportData = {
            id: data.id,
            driver_id: data.driver_id,
            route_id: data.route_id,
            route_number: data.route.route_number,
            stops: data.stops
          }
          return reportData
        })
        this.reportCreatedAt = res.data.data[0].created_at
        // ...and turn of loading indicator
      } catch (e) {
        Loading.hide()
        // this.$router.push('/dashboard/schedules')
      }
    },
    cancelExtraDetail () {
      this.showExtraDetail = false
      this.selectedRecord = {
        id: '',
        report_date: '',
        report_title: '',
        driver_id: '',
        route_id: ''
      }
    },
    cancelDailyDetail () {
      this.showEmptyConfirm = false
      this.showDailyDetail = false
      this.dailyReportForm = {
        report_date: '',
        report_title: '',
        report_no: '',
        user_id: '',
        report_data: []
      }
    },
    getRNCID: async function () {
      try {
        let res = await api.getRNCID()
        this.rnc_id = res.data.data
      } catch (e) {
      }
    },
    async onSubmitExtra () {
      this.selectedRecord.report_date = date.formatDate(date.extractDate(this.extraReportDate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
      if (!this.selectedRecord.driver_id) {
        this.selectedRecord.driver_id = this.rnc_id
      }
      const params = {
        data: this.selectedRecord
      }
      if (!this.isNewExtraRecord) {
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
        // this.$router.push('/dashboard/schedules')
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
      }
      this.cancelExtraDetail()
      this.hideAddRecordDlg()
      this.getReportList({
        pagination: this.pagination,
        filter: this.filter
      })
      console.log('selected record', this.selectedRecord)
    },
    async addDailyRecords () {
      this.dailyReportForm.report_data = this.dailyReportForm.report_data.map(data => {
        let temp = {}
        if (!data.driver_id) {
          if (data.id) {
            temp.id = data.id
          }
          temp.driver_id = this.rnc_id
          temp.route_id = data.route_id
          temp.stops = data.stops
        } else {
          temp = data
        }
        return temp
      })
      const params = {
        data: this.dailyReportForm
      }
      if (!this.isNewDailyRecord) {
        params.conditions = {
          report_no: this.dailyReportForm.report_no
        }
        Loading.show()
        try {
          let res = await api.updateReport(params)
          Loading.hide()
          console.log('result', res.data)
          // this.$router.push('/dashboard/schedules')
        } catch (error) {
          Loading.hide()
          console.log('error', error)
          // this.$router.push('/dashboard/schedules')
        }
      } else {
        Loading.show()
        try {
          let res = await api.createReport(params)
          Loading.hide()
          console.log('result', res.data)
          // this.$router.push('/dashboard/schedules')
        } catch (error) {
          Loading.hide()
          console.log('error', error)
          // this.$router.push('/dashboard/schedules')
        }
      }
      this.cancelDailyDetail()
      this.hideAddRecordDlg()
      this.getReportList({
        pagination: this.pagination,
        filter: this.filter
      })
    },
    async onSubmitDaily () {
      if (this.checkEmptyDrivers().length) {
        this.showEmptyConfirm = true
      } else {
        this.addDailyRecords()
      }
    },
    getExtraRoutes: async function (depot_id) {
      try {
        let res = await api.getExtraRoutes(depot_id)
        this.extraRoutes = res.data.data
      } catch (e) {
        // this.$router.push('/dashboard/schedules')
      }
    },
    getRegularRoutes: async function (depot_id) {
      try {
        let res = await api.getRegularRoutes(depot_id)
        this.dailyRoutes = res.data.data
        this.dailyReportForm.report_data = this.dailyRoutes.map(route => {
          return { driver_id: '', route_id: route.id, route_number: route.route_number, stops: '' }
        })
        // this.dailyRoutes.forEach((route, index) => {
        //   let reportData = this.reportForm.report_data.filter(data => {
        //     return data.route_id === route.id
        //   })
        //   if (!reportData.length) {
        //     this.reportForm.report_data.push({ driver_id: '', route_id: route.id, route_number: route.route_number })
        //   }
        // })
      } catch (e) {
      }
    },
    getDriverList: async function (depot_id) {
      try {
        let res = await api.getDriverList(depot_id)
        this.drivers = res.data.data
      } catch (e) {
      }
    },
    getDepotList: async function() {
      try {
        let res = await api.getDepotList()
        this.depots = res.data.data
      } catch (e) {
      }
    },
    removeSelectedDepot () {
      this.depot_id = '';
    },
    filterFnDrivers (val, update, abort) {
      update(() => {
        if (val === '') {
          this.filteredDriverNames = []
        } else {
          const needle = val.toLowerCase()
          this.filteredDriverNames = this.drivers.filter(name => name.driver_name.toLowerCase().indexOf(needle) > -1)
          this.filteredDriverNames = this.filteredDriverNames.slice(0, 3)
        }
      },
      ref => {
        if (val !== '' && ref.options.length > 0) {
          const matchedName = ref.options.find(item => item.driver_name.toLowerCase() === val.toLowerCase())
          if (matchedName) {
            ref.add(matchedName) // reset optionIndex in case there is something selected
          }
        }
      })
    },

    async onScroll ({ index, from, to, ref }) {
      let { page, rowsPerPage, rowsNumber } = this.pagination
      const lastIndex = this.reportList.length - 1
      const lastPage = Math.ceil(rowsNumber / rowsPerPage)
      if (index > 0 && page < lastPage && index === lastIndex) {
        this.pagination.page++
        await this.getReportList({
          pagination: this.pagination,
          filter: this.filter,
          isScroll: true
        })
      }
    },
    getReportList: async function (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let filter = props.filter

      // get all rows if "All" (0) is selected
      let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

      // calculate starting row of driverList
      let startRow = (page - 1) * rowsPerPage

      const params = {
        conditions: {
          is_date_filter: true
        },
        start: startRow,
        numPerPage: fetchCount,
        sortBy: sortBy,
        descending: descending,
        fromDate: this.fromDateAPI,
        endDate: this.endDateAPI
      }
      if (filter) {
        params.conditions.filter = filter
      }
      if (!this.isDateFilter) {
        params.conditions.is_date_filter = false
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getReports(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.reportList = res.data.data
        this.reportList.forEach((row, index) => {
          row.index = (page - 1) * 10 + index + 1
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
    removeExtra () {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove this report?',
        cancel: true,
        persistent: true,
        color: 'blue-7'
      }).onOk(async () => {
        const params = {
          conditions: {
            id: this.selectedRecord.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeSingleRecord(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: 'Report is removed successfully !'
          })
          this.cancelExtraDetail()
          this.hideAddRecordDlg()
          this.getReportList({
            pagination: this.pagination,
            filter: this.filter
          })
        } catch (e) {
          Loading.hide()
        }
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    },
    removeDaily (reportNo) {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove this report?',
        cancel: true,
        persistent: true,
        color: 'blue-7'
      }).onOk(async () => {
        const params = {
          conditions: {
            report_no: reportNo
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
            message: 'Report is removed successfully !'
          })
          this.cancelDailyDetail()
          this.hideAddRecordDlg()
          this.getReportList({
            pagination: this.pagination,
            filter: this.filter
          })
        } catch (e) {
          Loading.hide()
        }
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    },
    async changeDepot () {      
      await this.getDriverList(this.depot_id)
      await this.getExtraRoutes(this.depot_id)
      await this.getRegularRoutes(this.depot_id)
    }
  },
  created () {
  }
}
</script>
