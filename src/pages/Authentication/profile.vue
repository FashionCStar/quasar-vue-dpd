<template>
  <q-page>
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
                @click="$router.push('/dashboard')"
                :icon=" 'fas fa-arrow-left' "
              />
              <span>Dashboard</span>
            </div>
          </div>
        </template>
        <q-form
          @submit="onSubmit"
          rounded
          class="text-center q-gutter-y-md q-pa-md shadow-3"
          ref="userForm"
          :model="userForm"
          style="max-width: 600px; width:100%; border-radius: 10px; margin: auto"
        >
          <div class="row justify-between q-col-gutter-md" >
            <div class="col-12">
              <q-input outlined required label="First Name" color="cyan-7" v-model="userForm.first_name"></q-input>
            </div>
            <div class="col-12">
              <q-input outlined required label="Last Name" color="cyan-7" v-model="userForm.last_name"></q-input>
            </div>
            <div class="col-12">
              <q-input outlined required label="Username" color="cyan-7" v-model="userForm.name"></q-input>
            </div>
            <div class="col-12">
              <q-input outlined required label="Email" type="email" color="cyan-7" v-model="userForm.email"></q-input>
            </div>
            <div class="col-12">
              <q-input outlined required label="Mobile Phone" color="cyan-7" v-model="userForm.phone"></q-input>
            </div>
            <div class="col-12">
              <q-input outlined required label="Zip Code" color="cyan-7" v-model="userForm.zipcode"></q-input>
            </div>
          </div>
          <q-page-sticky position="bottom-right" :offset="[108, 18]">
            <q-btn fab icon="save" color="purple-7" type="submit" />
          </q-page-sticky>
        </q-form>
      </div>
    </template>
    <!-- place QPageScroller at end of page -->
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="purple-7" />
    </q-page-scroller>
  </q-page>
</template>

<script>

import { api } from 'src/boot/api'
import { Loading } from 'quasar'

export default {
  name: 'Profile',
  data: function () {
    return {
      isNewPage: false,
      userForm: {
        first_name: '',
        last_name: '',
        name: '',
        phone: '',
        email: '',
        zipcode: ''
      },
      currentUserID: ''
    }
  },
  created () {
    // check this is create page or update existing vehicle page
    this.getUserInfo()
  },
  methods: {
    getUserInfo: async function () {
      const params = {}
      Loading.show()
      try {
        let res = await api.getMyProfile(params)
        this.userForm = res.data.user
        // ...and turn of loading indicator
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    },
    async onSubmit () {
      const params = {
        data: this.userForm
      }
      try {
        let res = await api.updateUserInfo(params)
        console.log('res', res)
        this.$q.notify({
          color: 'positive',
          position: 'top',
          textColor: 'white',
          message: 'User is updated successfully'
        })
        this.$router.push('/dashboard')
      } catch (e) {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>

<style>
</style>
