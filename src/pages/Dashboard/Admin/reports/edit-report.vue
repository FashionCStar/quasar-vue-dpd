<template>
  <q-page class="q-mt-none" style="background-color: #3E444E">
    <template>
      <div>
        <q-bar style="background-color: #3E444E">
          <q-btn dense flat icon="close" color="white" @click="$router.push('/dashboard/schedules')">
          </q-btn>
          <div class="text-h6 text-white">Edit Daily Report</div>
        </q-bar>
      </div>
      <div class="q-px-md" style="background-color: #3E444E">
        <q-form
          @submit="onSubmit"
          rounded
          class="text-center q-px-md"
          ref="reportForm"
          :model="reportForm"
          style="max-width: 400px; width:100%; margin: auto;"
        >
          <q-card style="background-color: #3E444E; box-shadow: none">
            <q-card-section class="text-left q-pb-none">
              <span class="text-white">Date</span>
              <q-input dense outlined v-model="reportDate" bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer" color="black">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date v-model="reportDate"
                        minimal
                        @input="onReportDateChanged"
                        mask="DD/MM/YY ddd"
                        color="blue-7"
                      >
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
              <q-separator color="grey-4" />
            </q-card-section>
            <div v-for="(data, index) in reportForm.report_data" :key="data.route_id">
              <q-card-section class="text-left q-pb-none">
                <span class="text-white">Courier</span>
                <q-select
                  dense
                  outlined
                  v-model="data.courier_id"
                  use-input
                  hide-selected
                  fill-input
                  :options="filteredNames"
                  :option-value="opt => opt === null ? null : opt.id"
                  :option-label="opt => opt === null ? '- Null -' : opt.courier_name"
                  emit-value
                  map-options
                  @filter="filterFn"
                  label-color="grey-7"
                  class="q-ma-none q-pb-none"
                  behavior="menu"
                  bg-color="white"
                  input-class="text-black text-center"
                  :rules="[ val => checkDuplicates(val) || 'This record is duplicated' ]"
                  :hide-dropdown-icon="true"
                  color="blue-7"
                >
                <template v-slot:append>
                  <q-icon
                    v-if="data.courier_id !== ''"
                    class="cursor-pointer"
                    name="clear"
                    @click="removeCourier(index)"
                  />
                </template>
                </q-select>
                <span class="text-white">Route</span>
                <q-input required dense outlined bg-color="blue-grey-4" class="q-pb-md" input-class="text-white text-center q-pr-xl" label-color="grey-3" color="blue-7" :value="data.route_number" disable></q-input>
                <q-separator color="grey-4" v-if="index < reportForm.report_data.length-1" />
              </q-card-section>
            </div>
            <q-card-actions align="center">
              <div class="q-px-md">
                <q-btn
                  no-caps
                  dense
                  rounded
                  label="Delete"
                  color="blue-7"
                  @click="remove(reportForm)"
                  style="width: 100px; height:40px;"
                /> &nbsp;
                <q-btn
                  color="blue-7"
                  label="Update"
                  no-caps
                  dense
                  rounded
                  style="width: 100px; height:40px"
                  type="submit"
                />
              </div>
            </q-card-actions>
          </q-card>
        </q-form>
      </div>
      <q-dialog
        v-model="showEmptyDlg"
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
          </q-bar>

          <div class="layout-center">
            <q-card-section class="text-white">
              <div class="text-h6 text-center">You did not provide the driver name of the routes {{checkEmptyDrivers().join(',')}}.</div>
              <div class="text-h6 text-center">Do you want to continue?</div>
            </q-card-section>

            <q-card-section class="text-center q-pt-none">
              <q-btn
                color="blue-7"
                label="Back"
                no-caps
                dense
                rounded
                @click="showEmptyDlg = false"
                class="q-mt-xs q-mx-xs"
                style="width: 100px; height:40px"
              />
              <q-btn
                color="blue-7"
                label="Yes"
                no-caps
                dense
                rounded
                @click="addRecords"
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
  name: 'EditSchedule',
  data: function () {
    return {
      isNewPage: true,
      showEmptyDlg: false,
      reportDate: '',
      reportForm: {
        report_date: '',
        report_title: '',
        report_no: '',
        user_id: '',
        report_data: []
      },
      routes: [],
      couriers: [],
      filteredNames: [],
      rnc_id: '',
      reportCreatedAt: ''
    }
  },
  async created () {
    // check this is create page or update existing vehicle page
    this.isNew()
    this.reportForm.user_id = this.$store.getters['auth/user'].id
    this.reportDate = date.formatDate(new Date(), 'DD/MM/YY ddd')
    this.reportForm.report_date = date.formatDate(new Date(), 'YYYY-MM-DD')
    await this.getRNCID()
    await this.getReportInfo(this.reportForm.report_no)
    await this.getCourierList(this.reportCreatedAt)
    // await this.getRegularRoutes()
  },
  methods: {
    isNew () {
      if (this.$router.currentRoute.params.report_no !== null && this.$router.currentRoute.params.report_no !== undefined && this.$router.currentRoute.params.report_no !== '') {
        // this.isNewPage = false
        this.reportForm.report_no = this.$router.currentRoute.params.report_no
      }
    },
    onReportDateChanged (reportDate) {
      this.reportForm.report_date = date.formatDate(date.extractDate(reportDate, 'DD/MM/YY ddd'), 'YYYY-MM-DD')
    },
    getReportInfo: async function (reportNo) {
      Loading.show()
      try {
        let res = await api.getReportInfo(reportNo)
        Loading.hide()
        this.reportDate = date.formatDate(date.extractDate(res.data.data[0].report_date, 'YYYY-MM-DD'), 'DD/MM/YY ddd')
        this.reportForm.report_date = res.data.data[0].report_date
        this.reportForm.report_title = res.data.data[0].report_title
        this.reportForm.report_no = res.data.data[0].report_no
        this.reportForm.report_data = res.data.data.map(data => {
          let reportData = {
            id: data.id,
            courier_id: data.courier_id,
            route_id: data.route_id,
            route_number: data.route.route_number
          }
          return reportData
        })
        this.reportCreatedAt = res.data.data[0].created_at
        // ...and turn of loading indicator
      } catch (e) {
        Loading.hide()
        this.$router.push('/dashboard/schedules')
      }
    },
    // getRegularRoutes: async function () {
    //   Loading.show()
    //   try {
    //     let res = await api.getRegularRoutes()
    //     Loading.hide()
    //     this.routes = res.data.data
    //     this.routes.forEach((route, index) => {
    //       let reportData = this.reportForm.report_data.filter(data => {
    //         return data.route_id === route.id
    //       })
    //       if (!reportData.length) {
    //         this.reportForm.report_data.push({ courier_id: '', route_id: route.id, route_number: route.route_number })
    //       }
    //     })
    //   } catch (e) {
    //     Loading.hide()
    //     this.$router.push('/dashboard/schedules')
    //   }
    // },
    getCourierList: async function (createdAt) {
      Loading.show()
      try {
        let res = await api.getCourierList(createdAt)
        Loading.hide()
        this.couriers = res.data.data
        this.filteredNames = this.couriers
      } catch (e) {
        Loading.hide()
        this.$router.push('/dashboard/schedules')
      }
    },
    removeCourier (index) {
      this.reportForm.report_data[index].courier_id = ''
      this.reportForm.report_data[index].courier_name = ''
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
      },
      ref => {
        if (val !== '' && ref.options.length > 0) {
          console.log('valll', val)
          // ref.moveOptionSelection(1, true)
          const matchedName = ref.options.find(item => item.courier_name.toLowerCase() === val.toLowerCase())
          // console.log('matched', matchedName)
          if (matchedName) {
            ref.add(matchedName) // reset optionIndex in case there is something selected
            // ref.moveOptionSelection(1, true) // focus the first selectable option and do not update the input-value
          }
        }
      })
    },
    getRNCID: async function () {
      Loading.show()
      try {
        let res = await api.getRNCID()
        Loading.hide()
        this.rnc_id = res.data.data
      } catch (e) {
        Loading.hide()
      }
    },
    checkDuplicates (val) {
      if (val) {
        let courierList = this.reportForm.report_data.map((item) => item.courier_id)
        courierList = courierList.filter((item, index) => item !== '' && item !== 'RNC' && item !== this.rnc_id)
        let duplicates = courierList.filter((item, index) => item === val && courierList.indexOf(item) !== index)
        if (duplicates.length > 0) return false
        else return true
      } else {
        return true
      }
    },
    checkEmptyDrivers () {
      let emptyList = this.reportForm.report_data.filter((item, index) => item.courier_id === '')
      let emptyRoutes = emptyList.map(item => item.route_number)
      return emptyRoutes
    },
    async addRecords () {
      this.reportForm.report_data = this.reportForm.report_data.map(data => {
        let temp = {}
        if (!data.courier_id) {
          if (data.id) {
            temp.id = data.id
          }
          temp.courier_id = this.rnc_id
          temp.route_id = data.route_id
        } else {
          temp = data
        }
        return temp
      })
      const params = {
        data: this.reportForm
      }
      params.conditions = {
        report_no: this.reportForm.report_no
      }
      Loading.show()
      try {
        let res = await api.updateReport(params)
        Loading.hide()
        console.log('result', res.data)
        this.$router.push('/dashboard/schedules')
      } catch (error) {
        Loading.hide()
        console.log('error', error)
        this.$router.push('/dashboard/schedules')
      }
    },
    onSubmit () {
      if (this.checkEmptyDrivers().length) {
        this.showEmptyDlg = true
      } else {
        this.addRecords()
      }
    },
    remove (report) {
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
            message: 'Report is removed successfully !'
          })
          this.$router.push('/dashboard/schedules')
        } catch (e) {
          Loading.hide()
        }
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }
  }
}
</script>

<style>
</style>
