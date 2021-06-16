<template>
  <q-page>
    <template>
      <div>
        <q-table
          :class="is_mobile === 'ios'?'my-sticky-dynamic table-top-ios':is_mobile==='android'?'my-sticky-dynamic table-top-android': 'my-sticky-dynamic'"
          title="DEPOT LOCATIONS"
          :data="depotList"
          :columns="userLevel === 'admin' ? columns_admin : columns"
          row-key="depot_location"
          :pagination.sync="pagination"
          :filter="filter"
          @request="getDepots"
          binary-state-sort
          virtual-scroll
          :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48"
          :rows-per-page-options="[0]"
          @virtual-scroll="onScroll"
        >
          <template v-slot:top-left>
            <div class="items-center">
              <q-btn rounded dense no-caps label="+Add Depot" color="blue-7" style="width: 168px; height:40px;" @click="goToDetail()" />
            </div>
          </template>
          <template v-slot:top-right>
            <q-input dense debounce="300" v-model="filter" placeholder="Search" input-class="text-white border-white" style="width: 168px;" color="blue-7" class="q-mb-sm">
              <template v-slot:append>
                <q-icon name="search" color="white" />
              </template>
            </q-input>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click.native="goToDetail(props.row)">
              <q-td key="no" :props="props">{{ props.row.index }}</q-td>
              <q-td key="depot_location" :props="props">{{ props.row.depot_location }}</q-td>
              <q-td v-if="userLevel === 'admin'" key="user_name" :props="props">{{ props.row.user.full_name }}</q-td>
              <!-- <q-td key="buttons" :props="props">
                <q-btn
                  flat
                  :icon=" 'fas fa-trash-alt' "
                  @click.native.stop
                  @click="remove(props.row)"
                />
              </q-td> -->
            </q-tr>
          </template>

          <template v-slot:bottom="props">
            <div class="col-12 row justify-end items-center">
              Total Records: {{pagination.rowsNumber}}
              <q-btn
                icon="chevron_left"
                color="grey-8"
                round
                dense
                flat
                :disable="props.isFirstPage"
                @click="props.prevPage"
              />
              <span>{{props.pagination.page}} / {{Math.ceil(props.pagination.rowsNumber / props.pagination.rowsPerPage)}}</span>
              <q-btn
                icon="chevron_right"
                color="grey-8"
                round
                dense
                flat
                :disable="props.isLastPage"
                @click="props.nextPage"
              />
            </div>
          </template>
        </q-table>
      </div>
      <q-dialog
        v-model="showDetail"
        persistent
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E; max-width: 500px; min-height: 500px">
          <q-bar style="background-color: #272B33">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
            <div class="text-h6 text-white">{{dialogTitle}}</div>
          </q-bar>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form
              @submit="onSubmit"
              ref="selectedDepot"
              :model="selectedDepot"
              style="width: 320px; margin: auto;"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <span class="text-white">Depot Location</span>
                  <q-input dense outlined required v-model="selectedDepot.depot_location" color="blue-7" bg-color="white" input-class="text-black"></q-input>
                </div>
              </div>
              <q-card-actions align="center">
                <q-btn
                  no-caps
                  dense
                  rounded
                  v-if="!isNewRecord"
                  label="Delete"
                  color="blue-7"
                  @click="remove"
                  style="width: 100px; height:40px;"
                />
                <q-btn
                  :label="isNewRecord ? 'Add' : 'Update'"
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
    </template>
  </q-page>
</template>

<script>

import { api } from 'src/boot/api'
import { Loading } from 'quasar'

export default {
  name: 'DepotList',
  data () {
    return {
      filter: '',
      showDetail: false,
      pagination: {
        sortBy: 'depot_location',
        descending: false,
        page: 1,
        rowsPerPage: 100,
        rowsNumber: 20
      },
      columns: [
        { name: 'no', required: true, label: 'NO', align: 'left', field: 'no' },
        { name: 'depot_location', required: true, label: 'DEPOT Location', align: 'left', field: 'depot_location' }
      ],
      columns_admin: [
        { name: 'no', required: true, label: 'NO', align: 'left', field: 'no' },
        { name: 'depot_location', required: true, label: 'DEPOT Location', align: 'left', field: 'depot_location' },
        { name: 'user_name', required: true, label: 'USER', align: 'left', field: 'user_name' }
      ],
      depotList: [],
      selectedDepot: {
        depot_location: ''
      },
      dialogTitle: '',
      is_mobile: 'web',
      isNewRecord: true
    }
  },
  mounted () {
    this.checkPlatform()
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.getDepots({
      pagination: this.pagination,
      filter: undefined
    })
  },
  computed: {
    // ...mapFields('commons', ['pageMeta'])
    userLevel: {
      get () {
        return this.$store.state.auth.userLevel
      }
    }
  },
  methods: {
    // createNew () {
    //   this.$router.push({ name: 'NewNumber' })
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
    goToDetail (data) {
      if (data) {
        this.isNewRecord = false
        this.dialogTitle = 'Edit Depot Location'
        this.selectedDepot.id = data.id
        this.selectedDepot.depot_location = data.depot_location
      } else {
        this.isNewRecord = true
        this.dialogTitle = 'Add Depot Location'
        this.selectedDepot = {
          depot_location: ''
        }
      }
      // this.$router.push({ name: 'BuyerDetail', params: { id: id } })
      this.showDetail = true
    },
    async onScroll ({ index, from, to, ref }) {
      let { page, rowsPerPage, rowsNumber } = this.pagination
      const lastIndex = this.depotList.length - 1
      const lastPage = Math.ceil(rowsNumber / rowsPerPage)
      if (index > 0 && page < lastPage && index === lastIndex) {
        this.pagination.page++
        await this.getDepots({
          pagination: this.pagination,
          filter: this.filter,
          isScroll: true
        })
      }
    },
    getDepots: async function (props) {
      let { page, rowsPerPage, rowsNumber, sortBy, descending } = props.pagination
      let filter = props.filter
      let isScroll = props.isScroll

      // get all rows if "All" (0) is selected
      let fetchCount = rowsPerPage === 0 ? rowsNumber : rowsPerPage

      // calculate starting row of driverList
      let startRow = (page - 1) * rowsPerPage

      const params = {
        conditions: {},
        start: startRow,
        numPerPage: fetchCount,
        sortBy: sortBy,
        descending: descending
      }
      if (filter) {
        params.conditions.filter = filter
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getDepots(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        res.data.data.forEach((row, index) => {
          row.index = (page - 1) * 10 + index + 1
        })
        if (isScroll) {
          this.depotList = this.depotList.concat(res.data.data)
        } else {
          this.depotList = res.data.data
        }
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
    cancelDetail () {
      this.showDetail = false
      this.selectedDepot = {}
    },
    async onSubmit () {
      const params = {
        data: this.selectedDepot
      }
      if (this.selectedDepot.id) {
        params.conditions = {
          id: this.selectedDepot.id
        }
        Loading.show()
        try {
          let res = await api.updateDepot(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.cancelDetail()
      } else {
        Loading.show()
        try {
          let res = await api.createDepot(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.cancelDetail()
      }
      this.getDepots({
        pagination: this.pagination,
        filter: undefined
      })
    },
    remove () {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + this.selectedDepot.depot_location + '?',
        cancel: true,
        persistent: true,
        color: 'blue-7'
      }).onOk(async () => {
        const params = {
          conditions: {
            id: this.selectedDepot.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeDepot(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: this.selectedDepot.depot_location + ' is removed successfully !'
          })
          this.cancelDetail()
          this.getDepots({
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
