<template>
  <q-layout view="lHh lpr lFf">
    <!-- lFf -->
    <!-- lHh lpr lFf lHh Lpr fff-->
    <q-header
      elevated
      class="toolbar-grad"
    >
      <q-toolbar style="background-color: #272B33; height: 62px">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          v-touch-hold:1000.mouse.stop="touchHeld"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>{{pageTitle}}</q-toolbar-title>
        <div class="q-py-sm">
          <q-btn :to="{name: 'MyProfile'}"
            class="q-px-xs"
            text-color="white"
            style="box-shadow: none;"
          >
            <q-avatar size="24px">
              <img :src="require('../assets/images/icons/002-user.svg')">
            </q-avatar>
          </q-btn>
          <!-- <q-btn-dropdown
            class="q-px-xs"
            text-color="white"
            style="box-shadow: none;"
          >
            <template v-slot:label>
              <div class="row items-center no-wrap">
                <q-avatar>
                  <q-icon>
                    <img :src="require('../assets/images/icons/002-user.svg')">
                  </q-icon>
                </q-avatar>
              </div>
            </template>
            <q-list style="background-color: #272B33" class="text-white">
              <q-item clickable v-close-popup >
                <q-item-section avatar>
                  <q-avatar icon="far fa-user-circle" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>My Profile</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="logout">
                <q-item-section avatar>
                  <q-avatar icon="logout" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown> -->
        </div>
        <!-- <div>Quasar v{{ $q.version }}</div> -->
        <!-- <q-btn
          :icon="$q.dark.isActive ? 'mdi-brightness-5' : 'mdi-brightness-4'"
          flat
          dense
          round
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          no-caps
        >
          <q-badge
            color="red"
            floating
            transparent
          >new</q-badge>
        </q-btn> -->
      </q-toolbar>
      <router-view
        name="tabs"
        ref="mainTab"
      />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <!-- TODO:: move drawer items to a separate file -->
      <q-list>
        <q-item
          class="q-pa-none"
          style="height: 62px; background-color: #272B33"
        >
          <q-item-section>
            <q-img :src="require('../assets/images/ukcourier_logo.svg')" class="q-mx-auto" style="width: 200px;"/>
          </q-item-section>
        </q-item>
        <q-separator />
        <base-drawer />
      </q-list>
    </q-drawer>

    <!-- <q-footer
      class="text-white"
      reveal
      v-if="false"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container>
      <transition
        enter-active-class="animated fadeInLeft"
        leave-active-class="animated fadeOutRight"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<style lang="stylus">
.q-drawer__content
  background-color: #3E444E
</style>
<script>
import BaseDrawer from 'components/Drawers/BaseDrawer'
import { openURL } from 'quasar'
// import { mapFields } from 'assets/utils/vuex-utils'
export default {
  name: 'MyLayout',
  components: {
    BaseDrawer
  },
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      hasTabs: false
    }
  },
  computed: {
    // ...mapFields('commons', ['pageMeta'])
    user: {
      get () {
        return this.$store.state.auth.user
      },
      set (user) {
        this.$store.commit('auth/user', user)
      }
    },
    pageTitle: {
      get () {
        return this.$store.state.auth.pageTitle
      }
    }
  },
  created () {
    // this.$q.dark.set(false)
  },
  methods: {
    openURL,
    logout () {
      this.$store.commit('auth/token', '')
      this.$store.commit('auth/user', {})
      this.$router.push('/login')
    },
    touchHeld () {
      console.log('Touch held!')
      alert('Touch held!')
    },
    checkTabs () {
      this.$nextTick(() => {
        this.hasTabs = !!(this.$refs.toolbarTab || this.$refs.mainTab)
        // if (this.$refs.toolbarTab) {
        //   this.hasTabs = true
        // } else if (this.$refs.mainTab) {
        //   this.hasTabs = true
        // } else {
        //   this.hasTabs = false
        // }
        console.log('hasTabs =>', this.hasTabs)
      })
    }
  },
  mounted () {
    console.log(this.$q.platform.is.desktop)
    this.checkTabs()
  },
  updated: function () {
    this.checkTabs()
  }
}
</script>

<style scoped>
.toolbar-grad {
  background-image: linear-gradient(to bottom right, #ec268f 0%, #bc1e72 75%);
}
</style>
