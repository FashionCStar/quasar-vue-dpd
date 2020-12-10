<template>
  <div id="bgImage">
    <div class="q-pa-md text-center" style="margin-top: 67px;">
      <q-form
        @submit="registerUser"
        class="text-center q-pa-md shadow-3 bg-white q-mx-auto"
        style="max-width: 700px; border-radius: 10px;"
      >
        <div class="row justify-between q-col-gutter-md" >
          <div class="col-12 q-py-md">
            <q-img :src="require('../../assets/images/logo.png')" contain style="height: 80px"></q-img>
          </div>
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
          <div class="col-12 col-sm-2"></div>
          <div class="col-12 col-sm-8">
            <q-item tag="label" class="q-ma-none q-pa-none">
              <q-item-section avatar>
                <q-toggle color="red" v-model="accept"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Accept terms and conditions</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-sm-2"></div>
          <div class="col-12">
            <q-btn label="Sign Up" :disable="!accept" type="submit" color="pink-8" class="q-btn--push" style="width:200px; height:50px;"/>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<style>
  #bgImage {
    background: url(../../assets/images/dark-material-bg.jpg) 50% 50% / cover no-repeat;
    overflow: auto;
    padding: 2.1rem 0 2.8rem;
    min-height: 100vh;
  }
</style>
<script>
import { Loading } from 'quasar'
import { api } from 'src/boot/api'
export default {
  name: 'SignUp',
  data () {
    return {
      user: {
        name: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
        first_name: '',
        last_name: '',
        zipcode: ''
      },
      userAvatar: {},
      accept: false
    }
  },
  created () {
  },
  methods: {
    addAvatar (files) {
      this.userAvatar = files[0]
    },
    async registerUser () {
      Loading.show()
      try {
        // if (Object.keys(this.userAvatar).length !== 0) {
        //   const fd = new FormData()
        //   fd.append('image', this.userAvatar)
        //   const headers = 'Content-Type = multipart/form-data'
        //   let res1 = await api.uploadUserAvatar(fd, headers)
        //   this.user.avatar = res1.data.path
        // } else {
        //   this.user.avatar = ''
        // }
        try {
          let res = await api.registerUser(this.user)
          // LocalStorage.setItem('user', res.data)
          console.log('res', res.data)
          Loading.hide()
          this.$q.notify({
            color: 'positive',
            textColor: 'white',
            position: 'top',
            message: 'User is registered successfully'
          })
          this.$router.push('/')
        } catch (error) {
          Loading.hide()
        }
      } catch (error) {
        Loading.hide()
      }
    }
  }
}
</script>
