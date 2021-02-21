<template>
  <q-page class="q-mt-none" style="background-color: #3E444E">
    <template>
      <div>
        <div>
          <q-bar style="background-color: #3E444E">
            <q-btn dense flat icon="close" color="white" @click="$router.push('/dashboard/drivers')">
            </q-btn>
            <div class="text-h6 text-white">{{isNewPage ? 'Add Driver' : 'Edit Driver'}}</div>
          </q-bar>
        </div>
        <div class="q-px-md" style="background-color: #3E444E">
          <q-form
            @submit="onSubmit"
            :model="driver"
            ref="driverForm"
            class="text-center q-px-md"
            style="max-width: 400px; width:100%; margin: auto;"
          >
            <q-card style="background-color: #3E444E; box-shadow: none">
              <!--<div class="col-12 row items-center justify-center">-->
                <!--<q-uploader-->
                  <!--color="teal"-->
                  <!--flat-->
                  <!--bordered-->
                  <!--accept=".jpg, .png, image/*"-->
                  <!--ref="uploader"-->
                  <!--auto-expand-->
                  <!--label="Upload Avatar"-->
                  <!--hide-upload-btn-->
                  <!--@added="addAvatar"-->
                <!--/>-->
              <!--</div>-->
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Full Name</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driver.driver_name"></q-input>
              </q-card-section>
              <!-- <q-card-section class="text-left q-pb-none">
                <span class="text-white">Full Name</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driver.full_name"></q-input>
              </q-card-section> -->
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Mobile</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driver.phone"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none row">
                <div class="col-6">
                  <q-radio v-model="driver.pay_type" val="per_stop" label="PAY PER STOP" class="q-mx-auto text-white" color="white" keep-color />
                </div>
                <div class="col-6">
                  <q-radio v-model="driver.pay_type" val="fixed" label="FIXED RATE" class="q-mx-auto text-white" color="white" keep-color />
                </div>
              </q-card-section>
              <q-card-section class="text-left q-py-none row">
                <div class="col-6">
                  <q-radio v-model="driver.vat_percentage" :val="0.2" label="VAT 20.00%" class="q-mx-auto text-white" color="white" keep-color />
                </div>
                <div class="col-6">
                  <q-radio v-model="driver.vat_percentage" :val="0" label="VAT 0.00%" class="q-mx-auto text-white" color="white" keep-color />
                </div>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Payment</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driver.pay_amount"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">E-Mail</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driver.email"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Password</span>
                <base-text-field
                  dense
                  outlined
                  required
                  bg-color="white"
                  color="blue-7"
                  class="q-pb-md"
                  normalize-bottom
                  icon="mdi-card"
                  clearable
                  type="password"
                  hide-show-password
                  v-model="driver.password"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-key" />
                  </template>
                </base-text-field>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Confirm</span>
                <base-text-field
                  dense
                  outlined
                  required
                  bg-color="white"
                  color="blue-7"
                  class="q-pb-md"
                  v-model="driver.confirmPassword"
                  normalize-bottom
                  icon="mdi-card"
                  clearable
                  type="password"
                  :rules="[val => val === driver.password || 'Password is not match']"
                  hide-show-password
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-key" />
                  </template>
                </base-text-field>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <q-checkbox v-model="driver.has_access" :val="true" label="Allow login to see performance" class="q-mx-auto text-white" color="grey" dark />
              </q-card-section>
              <q-card-actions align="center">
                <div class="q-px-md">
                  <q-btn
                    no-caps
                    dense
                    rounded
                    v-if="!isNewPage"
                    label="Delete"
                    color="blue-7"
                    @click="remove"
                    style="width: 100px; height:40px;"
                  /> &nbsp;
                  <q-btn
                    color="blue-7"
                    :label="isNewPage ? 'Add New' : 'Update'"
                    no-caps
                    dense
                    rounded
                    style="width: 100px; height:40px"
                    type="submit"
                  />
                  <!-- <q-btn
                    no-caps
                    dense
                    rounded
                    :label="user.is_active ? 'DEACTIVATE' : 'ACTIVATE'"
                    color="blue-7"
                    @click="activeUser()"
                    style="width: 100px; height:40px;"
                  /> -->
                </div>
              </q-card-actions>
            </q-card>
          </q-form>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import { api } from 'src/boot/api'
export default {
  name: 'NewDriver',
  data () {
    return {
      driver: {
        id: '',
        full_name: '',
        driver_name: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
        pay_type: '',
        vat_percentage: '',
        pay_amount: '',
        has_access: 0
      },
      pay_options: [
        { label: 'PAY PER STOP', value: 'per_stop' },
        { label: 'FIXED RATE', value: 'fixed' }
      ],
      vat_options: [
        { label: 'VAT 20.00%', value: 0.2 },
        { label: 'VAT 0.00%', value: 0 }
      ],
      userAvatar: {},
      isNewPage: false
    }
  },
  async created () {
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.isNew()
    if (!this.isNewPage) {
      await this.getDriverInfo(this.driver.id)
    }
  },
  methods: {
    isNew () {
      if (this.$router.currentRoute.params.id !== null && this.$router.currentRoute.params.id !== undefined && this.$router.currentRoute.params.id !== '') {
        this.isNewPage = false
        this.driver.id = this.$router.currentRoute.params.id
      } else {
        this.isNewPage = true
      }
    },
    getDriverInfo: async function (id) {
      Loading.show()
      try {
        let res = await api.getDriverInfo(id)
        this.driver = res.data.driver
        console.log('driver details', res.data.driver)
        Loading.hide()
      } catch (e) {
        Loading.hide()
        this.$router.push('/dashboard/drivers')
      }
    },
    addAvatar (files) {
      this.userAvatar = files[0]
    },
    async onSubmit () {
      if (this.isNewPage) {
        console.log('driver', this.driver)
        Loading.show()
        try {
          let res = await api.createDriver(this.driver)
          console.log('res', res.data)
          Loading.hide()
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            position: 'top',
            message: 'User is registered successfully'
          })
          this.$router.push('/dashboard/drivers')
        } catch (error) {
          Loading.hide()
        }
      } else {
        const params = {
          data: this.driver
        }
        params.conditions = {
          id: this.driver.id
        }
        Loading.show()
        try {
          let res = await api.updateDriver(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.$router.push('/dashboard/drivers')
      }
    },
    remove () {
      // Confirm Remove Vehicle
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you surely remove ' + this.driver.driver_name + '?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const params = {
          conditions: {
            id: this.driver.id
          }
        }
        Loading.show()
        try {
          let res = await api.removeDriver(params)
          Loading.hide()
          console.log('remove result', res)
          this.$q.notify({
            color: 'positive',
            position: 'top',
            message: this.driver.driver_name + ' is removed successfully !'
          })
          // this.getUsers({
          //   pagination: this.pagination,
          //   filter: undefined
          // })
        } catch (e) {
          Loading.hide()
        }
        this.$router.push('/dashboard/drivers')
      }).onCancel(() => {
      }).onDismiss(() => {
      })
    }
    // async activeUser () {
    //   const params = {
    //     is_active: !this.driver.is_active
    //   }
    //   params.conditions = {
    //     id: this.driver.id
    //   }
    //   Loading.show()
    //   try {
    //     let res = await api.activeUser(params)
    //     console.log('res', res.data)
    //     Loading.hide()
    //     this.$q.notify({
    //       color: 'positive',
    //       textColor: 'white',
    //       position: 'top',
    //       message: !this.driver.is_active ? 'User is activated' : 'User is deactivated'
    //     })
    //     this.$router.push('/dashboard/users')
    //   } catch (error) {
    //     Loading.hide()
    //   }
    // }
  }
}
</script>
