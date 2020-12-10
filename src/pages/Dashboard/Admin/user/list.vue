<template>
  <q-page padding>
    <template>
      <div class="q-pa-md">
        <q-table
          title="Users"
          :data="userList"
          :columns="columns"
          row-key="name"
          :pagination.sync="pagination"
          :filter="filter"
          @request="getUsers"
          binary-state-sort
        >
          <template v-slot:top-right>
            <q-input dense debounce="300" v-model="filter" placeholder="Search">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <div class="items-center q-ml-xl">
              <q-btn class="bg-white text-primary shadow-3 q-btn--push" @click="createNew()">
                New User
              </q-btn>
            </div>
          </template>

          <template v-slot:body="props">
            <q-tr :props="props" @click.native="goToDetail(props.row.id)">
              <q-td key="first_name" :props="props">{{ props.row.first_name }}</q-td>
              <q-td key="last_name" :props="props">{{ props.row.last_name }}</q-td>
              <q-td key="name" :props="props">{{ props.row.name }}</q-td>
              <q-td key="email" :props="props">{{ props.row.email }}</q-td>
              <q-td key="phone" :props="props">{{ props.row.phone }}</q-td>
              <q-td key="zipcode" :props="props">{{ props.row.zipcode }}</q-td>
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
    </template>
  </q-page>
</template>

<script>

import { api } from 'src/boot/api'
import { Loading } from 'quasar'

export default {
  name: 'Users',
  data () {
    return {
      filter: '',
      showDetail: false,
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 20
      },
      columns: [
        { name: 'first_name', required: true, label: 'First Name', align: 'left', field: 'first_name', sortable: true },
        { name: 'last_name', required: true, label: 'Last Name', align: 'left', field: 'last_name', sortable: true },
        { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
        { name: 'email', required: true, label: 'Email', align: 'center', field: 'email', sortable: true },
        { name: 'phone', required: true, label: 'Phone', align: 'center', field: 'phone', sortable: true },
        { name: 'zipcode', required: true, label: 'Zipcode', align: 'center', field: 'zipcode', sortable: true },
        { name: 'buttons', label: '', field: 'buttons' }
      ],
      userList: []
    }
  },
  mounted () {
    // get initial vehicleList from server (1st page)
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.getUsers({
      pagination: this.pagination,
      filter: undefined
    })
  },
  methods: {
    createNew () {
      this.$router.push({ name: 'New User' })
    },
    goToDetail (id) {
      this.$router.push({ name: 'User Detail', params: { id: id } })
    },
    getUsers: async function (props) {
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
        let res = await api.getUsers(params)
        Loading.hide()

        // clear out existing vehicleList and add new
        this.userList = res.data.data

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
    remove (user) {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + user.name + '?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const params = {
          conditions: {
            id: user.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeUser(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: user.name + ' is removed successfully !'
          })
          this.getUsers({
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
