<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
          title="ROUTES"
          :data="routeList"
          :columns="columns"
          row-key="route_number"
          :pagination.sync="pagination"
          :filter="filter"
          @request="getRoutes"
          binary-state-sort
        >
          <template v-slot:top-left>
            <div class="items-center">
              <q-btn class="bg-white text-primary shadow-3 q-btn--push" @click="goToDetail()">
                New ROUTE
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
              <q-td key="route_number" :props="props">{{ props.row.route_number }}</q-td>
              <q-td key="route_type" :props="props">{{ !props.row.route_type ? 'Regular Route' : 'Extra Route' }}</q-td>
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
              ref="selectedNumber"
              :model="selectedNumber"
            >
              <div class="row justify-between q-col-gutter-md" >
                <div class="col-12">
                  <q-input outlined required label="Number" color="cyan-7" v-model="selectedNumber.route_number"></q-input>
                </div>
                <div class="col-12">
                  <q-select
                    dense
                    label="Route"
                    outlined
                    v-model="selectedNumber.route_type"
                    :options="route_types"
                    :option-value="opt => opt === null ? null : opt.value"
                    :option-label="opt => opt === null ? '- Null -' : opt.label"
                    emit-value
                    map-options
                    color="cyan-7"
                    class="q-mb-xs"
                    behavior="menu"
                  >
                  </q-select>
                </div>
              </div>
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
  name: 'RouteList',
  data () {
    return {
      filter: '',
      showDetail: false,
      pagination: {
        sortBy: 'route_number',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      route_types: [
        { label: 'Regular Route', value: 0 },
        { label: 'Extra Route', value: 1 }
      ],
      columns: [
        // { name: 'no', required: true, label: 'No', align: 'left', field: 'no', sortable: true },
        { name: 'route_number', required: true, label: 'ROUTE', align: 'left', field: 'route_number', sortable: true },
        { name: 'route_type', required: true, label: 'Type', align: 'center', field: 'route_type', sortable: true },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      routeList: [],
      selectedNumber: {
        route_number: '',
        route_type: ''
      },
      dialogTitle: ''
    }
  },
  mounted () {
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.getRoutes({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    // createNew () {
    //   this.$router.push({ name: 'NewNumber' })
    // },
    goToDetail (data) {
      if (data) {
        this.dialogTitle = 'Edit Route'
        this.selectedNumber.id = data.id
        this.selectedNumber.route_number = data.route_number
        this.selectedNumber.route_type = data.route_type
      } else {
        this.dialogTitle = 'Add Route'
        this.selectedNumber = {
          route_number: '',
          route_type: ''
        }
      }
      // this.$router.push({ name: 'BuyerDetail', params: { id: id } })
      this.showDetail = true
    },
    getRoutes: async function (props) {
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
        let res = await api.getRoutes(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.routeList = res.data.data
        this.routeList.forEach((row, index) => {
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
      this.selectedNumber = {}
    },
    async onSubmit () {
      const params = {
        data: this.selectedNumber
      }
      if (this.selectedNumber.id) {
        params.conditions = {
          id: this.selectedNumber.id
        }
        Loading.show()
        try {
          let res = await api.updateRoute(params)
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
          let res = await api.createRoute(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.cancelDetail()
      }
      this.getRoutes({
        pagination: this.pagination,
        filter: undefined
      })
    },
    remove (number) {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + number.route_number + '?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const params = {
          conditions: {
            id: number.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeRoute(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: number.route_number + ' is removed successfully !'
          })
          this.getRoutes({
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
