<template>
  <q-page>
    <template>
      <div>
        <q-table
          :class="is_mobile?'my-sticky-dynamic table-top-mobile':'my-sticky-dynamic'"
          title="COURIERS"
          :data="courierList"
          :columns="columns"
          row-key="courier_name"
          :pagination.sync="pagination"
          :filter="filter"
          @request="getCouriers"
          binary-state-sort
        >
          <template v-slot:top-left>
            <div class="items-center">
              <q-btn rounded dense no-caps label="+Add Driver" color="blue-7" style="width: 168px; height:40px;" @click="goToDetail()" />
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
              <q-td key="courier_name" :props="props">{{ props.row.courier_name }}</q-td>
              <q-td key="buttons" :props="props">
                <q-btn
                  flat
                  :icon=" 'fas fa-trash-alt' "
                  @click.native.stop
                  @click="remove(props.row)"
                />
              </q-td>
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
        :maximized="true"
        transition-show="scale"
        transition-hide="scale"
      >
        <q-card style="background-color: #3E444E">
          <q-bar style="background-color: #3E444E">
            <q-btn dense flat icon="close" color="white" v-close-popup>
              <q-tooltip content-class="bg-white text-black">Close</q-tooltip>
            </q-btn>
            <div class="text-h6 text-white">{{dialogTitle}}</div>
          </q-bar>
          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <q-form
              @submit="onSubmit"
              ref="selectedName"
              :model="selectedName"
              style="max-width: 400px; margin: auto;"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <span class="text-white">Route</span>
                  <q-input dense outlined required color="blue-7" bg-color="white" input-class="text-black text-center" v-model="selectedName.courier_name"></q-input>
                </div>
              </div>
              <q-separator />
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
  name: 'CourierList',
  data () {
    return {
      filter: '',
      showDetail: false,
      pagination: {
        sortBy: 'courier_name',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      columns: [
        { name: 'no', required: true, label: 'NO', align: 'left', field: 'no' },
        { name: 'courier_name', required: true, label: 'COURIER', align: 'left', field: 'courier_name', sortable: true },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      courierList: [],
      selectedName: {
        courier_name: ''
      },
      dialogTitle: '',
      is_mobile: false,
      isNewRecord: true
    }
  },
  mounted () {
    this.checkPlatform()
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.getCouriers({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    checkPlatform () {
      if (this.$q.platform.is.mobile) {
        this.is_mobile = true
      } else {
        this.is_mobile = false
      }
    },
    createNew () {
      this.$router.push({ name: 'NewName' })
    },
    goToDetail (data) {
      if (data) {
        this.isNewRecord = false
        this.dialogTitle = 'Edit Name'
        this.selectedName.id = data.id
        this.selectedName.courier_name = data.courier_name
      } else {
        this.isNewRecord = true
        this.dialogTitle = 'Add New Name'
        this.selectedName = {
          courier_name: ''
        }
      }
      // this.$router.push({ name: 'BuyerDetail', params: { id: id } })
      this.showDetail = true
    },
    getCouriers: async function (props) {
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
        descending: descending
      }
      if (filter) {
        params.conditions.filter = filter
      }

      // fetch vehicleList from "server"
      Loading.show()
      try {
        let res = await api.getCouriers(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.courierList = res.data.data
        this.courierList.forEach((row, index) => {
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
    cancelDetail () {
      this.showDetail = false
      this.selectedName = {}
    },
    async onSubmit () {
      const params = {
        data: this.selectedName
      }
      if (this.selectedName.id) {
        params.conditions = {
          id: this.selectedName.id
        }
        Loading.show()
        try {
          let res = await api.updateCourier(params)
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
          let res = await api.createCourier(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.cancelDetail()
      }
      this.getCouriers({
        pagination: this.pagination,
        filter: undefined
      })
    },
    remove (name) {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + name.courier_name + '?',
        cancel: true,
        persistent: true,
        color: 'blue-7'
      }).onOk(async () => {
        const params = {
          conditions: {
            id: name.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeCourier(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: name.courier_name + ' is removed successfully !'
          })
          this.getCouriers({
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
