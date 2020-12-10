<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
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
              <q-btn class="bg-white text-primary shadow-3 q-btn--push" @click="goToDetail()">
                New COURIER
              </q-btn>
            </div>
          </template>
          <template v-slot:top-right>
            <q-input dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click.native="goToDetail(props.row)">
              <!-- <q-td key="no" :props="props">{{ props.row.index }}</q-td> -->
              <q-td key="courier_name" :props="props">{{ props.row.courier_name }}</q-td>
              <q-td key="buttons" :props="props">
                <q-btn
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
              ref="selectedName"
              :model="selectedName"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-input outlined required label="Name" color="cyan-7" v-model="selectedName.courier_name"></q-input>
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
        // { name: 'no', required: true, label: 'No', align: 'left', field: 'no', sortable: true },
        { name: 'courier_name', required: true, label: 'COURIER', align: 'left', field: 'courier_name', sortable: true },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      courierList: [],
      selectedName: {
        courier_name: ''
      },
      dialogTitle: ''
    }
  },
  mounted () {
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.getCouriers({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    createNew () {
      this.$router.push({ name: 'NewName' })
    },
    goToDetail (data) {
      if (data) {
        this.dialogTitle = 'Edit Name'
        this.selectedName.id = data.id
        this.selectedName.courier_name = data.courier_name
      } else {
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
        console.log('errorrrrrrrrrr', e)
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
        persistent: true
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
