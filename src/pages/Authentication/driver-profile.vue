<template>
  <q-page class="q-mt-none" style="background-color: #3E444E">
    <template>
      <div>
        <div>
          <q-bar style="background-color: #3E444E">
            <q-btn dense flat icon="close" color="white" @click="$router.push('/dashboard/drivers')">
            </q-btn>
            <div class="text-h6 text-white">My Profile</div>
          </q-bar>
        </div>
        <div class="q-px-md" style="background-color: #3E444E">
          <q-form
            @submit="onSubmit"
            :model="driverForm"
            ref="driverForm"
            class="text-center q-px-md"
            style="max-width: 400px; width:100%; margin: auto;"
          >
            <q-card style="background-color: #3E444E; box-shadow: none">
              <q-card-section class="text-left q-pb-none">
                <span class="text-white">Name</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driverForm.full_name"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Mobile</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driverForm.phone"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">E-Mail</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driverForm.email"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none row">
                <div class="col-6">
                  <q-radio v-model="driverForm.pay_type" val="per_stop" label="PAY PER STOP" class="q-mx-auto text-white" color="white" keep-color />
                </div>
                <div class="col-6">
                  <q-radio v-model="driverForm.pay_type" val="fixed" label="FIXED RATE" class="q-mx-auto text-white" color="white" keep-color />
                </div>
              </q-card-section>
              <q-card-section class="text-left q-py-none row">
                <div class="col-6">
                  <q-radio v-model="driverForm.vat_percentage" :val="0.2" label="VAT 20.00%" class="q-mx-auto text-white" color="white" keep-color />
                </div>
                <div class="col-6">
                  <q-radio v-model="driverForm.vat_percentage" :val="0" label="VAT 0.00%" class="q-mx-auto text-white" color="white" keep-color />
                </div>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Amount</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driverForm.pay_amount"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Username</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="driverForm.driver_name"></q-input>
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
                  v-model="driverForm.password"
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
                  v-model="driverForm.confirmPassword"
                  normalize-bottom
                  icon="mdi-card"
                  clearable
                  type="password"
                  :rules="[val => val === driverForm.password || 'Password is not match']"
                  hide-show-password
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-key" />
                  </template>
                </base-text-field>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <q-checkbox v-model="driverForm.has_access" :val="true" label="Allow login to see performance" class="q-mx-auto text-white" color="grey" dark />
              </q-card-section>
              <q-card-actions align="center">
                <div class="q-px-md">
                  <q-btn
                    no-caps
                    dense
                    rounded
                    label="Logout"
                    color="blue-7"
                    @click="logout"
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
      driverForm: {
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
  computed: {
    // ...mapFields('commons', ['pageMeta'])
    driver: {
      get () {
        return this.$store.state.auth.driver
      }
    }
  },
  async created () {
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    // this.isNew()
    // if (!this.isNewPage) {
    await this.getDriverInfo(this.driver.id)
    // }
  },
  methods: {
    // isNew () {
    //   if (this.$router.currentRoute.params.id !== null && this.$router.currentRoute.params.id !== undefined && this.$router.currentRoute.params.id !== '') {
    //     this.isNewPage = false
    //     this.driver.id = this.$router.currentRoute.params.id
    //   } else {
    //     this.isNewPage = true
    //   }
    // },
    logout () {
      this.$store.commit('auth/token', '')
      this.$store.commit('auth/driver', {})
      this.$router.push('/login')
    },
    getDriverInfo: async function (id) {
      this.driverForm = this.driver
      // Loading.show()
      // try {
      //   let res = await api.getDriverInfo(id)
      //   this.driver = res.data.driver
      //   console.log('driver details', res.data.driver)
      //   Loading.hide()
      // } catch (e) {
      //   Loading.hide()
      //   this.$router.push('/dashboard/drivers')
      // }
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
          data: this.driverForm
        }
        params.conditions = {
          id: this.driverForm.id
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
    }
  }
}
</script>
