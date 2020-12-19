<template>
  <q-page class="q-mt-none" style="background-color: #3E444E">
    <!-- content -->
    <!-- <div class="bg-light-blue" style="width: 100%; height: 150px; position: absolute">
    </div> -->
    <template>
      <div>
        <!-- <template>
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
        </template> -->
        <div>
          <q-bar style="background-color: #3E444E">
            <q-btn dense flat icon="close" color="white" @click="$router.push('/dashboard/users')">
            </q-btn>
            <div class="text-h6 text-white">{{isNewPage ? 'Add User' : 'Edit User'}}</div>
          </q-bar>
        </div>
        <div class="q-px-md" style="background-color: #3E444E">
          <q-form
            @submit="onSubmit"
            :model="user"
            ref="userForm"
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
              <q-card-section class="text-left q-pb-none">
                <span class="text-white">First Name</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.first_name"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Last Name</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.last_name"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Username</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.name"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Email</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.email"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">Mobile</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.phone"></q-input>
              </q-card-section>
              <q-card-section class="text-left q-py-none">
                <span class="text-white">ZipCode</span>
                <q-input dense outlined required bg-color="white" color="blue-7" class="q-pb-md" input-class="text-black text-center" v-model="user.zipcode"></q-input>
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
                  v-model="user.password"
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
                  v-model="user.confirmPassword"
                  normalize-bottom
                  icon="mdi-card"
                  clearable
                  type="password"
                  :rules="[val => val === user.password  || 'Password is not match']"
                  hide-show-password
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-key" />
                  </template>
                </base-text-field>
              </q-card-section>
              <q-card-actions align="center">
                <div class="q-px-md">
                  <!-- <q-btn
                    no-caps
                    dense
                    rounded
                    label="Delete"
                    color="blue-7"
                    @click="remove()"
                    style="width: 100px; height:40px;"
                  /> &nbsp; -->
                  <q-btn
                    color="blue-7"
                    :label="isNewPage ? 'Add New' : 'Update'"
                    no-caps
                    dense
                    rounded
                    style="width: 100px; height:40px"
                    type="submit"
                  />
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
