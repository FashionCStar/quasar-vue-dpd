<template>
  <q-page padding>
    <!-- content -->
    <div class="bg-light-blue" style="width: 100%; height: 150px; position: absolute">
    </div>
    <template>
      <div class="q-pa-md">
        <template>
          <div class="row items-center justify-between text-white" style="height: 150px; position: relative">
            <div class="items-center" style="font-size: 20px;">
              <q-btn
                class="bg-white text-primary shadow-3 q-btn--push q-mr-md"
                rounded
                @click="$router.push('/dashboard/users')"
                :icon=" 'fas fa-arrow-left' "
              />
              <span>{{isNewPage ? 'New User' : 'User Detail'}}</span>
            </div>
          </div>
        </template>
        <q-form
          @submit="onSubmit"
          class="text-center q-pa-md shadow-3 q-mx-auto"
          style="max-width: 700px; border-radius: 10px;"
        >
          <div class="row justify-between q-col-gutter-md" >
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
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="First Name" color="cyan-7" v-model="user.first_name"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="Last Name" color="cyan-7" v-model="user.last_name"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="Username" color="cyan-7" v-model="user.name"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="Email" type="email" color="cyan-7" v-model="user.email"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="Mobile Phone" color="cyan-7" v-model="user.phone"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <q-input outlined dense required label="Zip Code" color="cyan-7" v-model="user.zipcode"></q-input>
            </div>
            <div class="col-12 col-sm-6">
              <base-text-field
                outlined
                required
                dense
                color="cyan-7"
                v-model="user.password"
                normalize-bottom
                label="Password"
                icon="mdi-card"
                clearable
                class="q-ml-none"
                type="password"
                hide-show-password
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account-key" />
                </template>
              </base-text-field>
            </div>
            <div class="col-12 col-sm-6">
              <base-text-field
                outlined
                required
                dense
                color="cyan-7"
                v-model="user.confirmPassword"
                normalize-bottom
                label="Confirm Password"
                icon="mdi-card"
                clearable
                class="q-ml-none"
                type="password"
                :rules="[val => val === user.password  || 'Password is not match']"
                hide-show-password
              >
                <template v-slot:prepend>
                  <q-icon name="mdi-account-key" />
                </template>
              </base-text-field>
            </div>
            <div class="col-12">
              <q-btn :label="isNewPage ? 'Add New' : 'Update'" type="submit" color="pink-8" class="q-btn--push" style="width:200px; height:50px;"/>
            </div>
          </div>
        </q-form>
      </div>
    </template>
  </q-page>
</template>

<script>
import { Loading } from 'quasar'
import { api } from 'src/boot/api'
export default {
  name: 'NewUser',
  data () {
    return {
      user: {
        id: '',
        name: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
        first_name: '',
        last_name: '',
        zipcode: '',
        user_type: 1
      },
      userAvatar: {},
      isNewPage: false
    }
  },
  async created () {
    this.$store.commit('auth/pageTitle', this.$router.currentRoute.meta.title)
    this.isNew()
    if (!this.isNewPage) {
      await this.getUserInfo(this.user.id)
    }
  },
  methods: {
    isNew () {
      if (this.$router.currentRoute.params.id !== null && this.$router.currentRoute.params.id !== undefined && this.$router.currentRoute.params.id !== '') {
        this.isNewPage = false
        this.user.id = this.$router.currentRoute.params.id
      } else {
        this.isNewPage = true
      }
    },
    getUserInfo: async function (id) {
      Loading.show()
      try {
        let res = await api.getUserInfo(id)
        this.user = res.data.user
        console.log('user details', res.data.user)
        Loading.hide()
      } catch (e) {
        Loading.hide()
        this.$router.push('/dashboard/users')
      }
    },
    addAvatar (files) {
      this.userAvatar = files[0]
    },
    async onSubmit () {
      if (this.isNewPage) {
        Loading.show()
        try {
          let res = await api.registerUser(this.user)
          console.log('res', res.data)
          Loading.hide()
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            position: 'top',
            message: 'User is registered successfully'
          })
          this.$router.push('/dashboard/users')
        } catch (error) {
          Loading.hide()
        }
      } else {
        const params = {
          data: this.user
        }
        params.conditions = {
          id: this.user.id
        }
        Loading.show()
        try {
          let res = await api.updateUser(params)
          Loading.hide()
          console.log('result', res.data)
        } catch (error) {
          Loading.hide()
          console.log('error', error)
        }
        this.$router.push('/dashboard/users')
      }
    }
  }
}
</script>
