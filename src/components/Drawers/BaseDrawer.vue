<template>
  <div>
    <!-- <q-item-label header>Menu</q-item-label> -->
    <q-item
      clickable
      to="/dashboard/clients"
      v-if="userLevel==='admin'"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/001-group.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: white">CLIENTS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="userLevel==='admin'" color="white"/>
    <q-item
      clickable
      to="/dashboard/users"
      v-if="userLevel==='admin' || userLevel==='client'"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/001-group.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: white">USERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="userLevel==='admin' || userLevel==='client'" color="white"/>
    <q-item
      clickable
      to="/dashboard/schedules"
      active-class="router--active"
      v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('schedules')"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/003-calendar.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>SCHEDULE</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white" v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('schedules')"/>
    <q-item
      clickable
      to="/dashboard/performance"
      active-class="router--active"
      v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('performance')"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/004-graphic.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>PERFORMANCE</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white" v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('performance')"/>
    <q-item
      clickable
      to="/dashboard/drivers"
      active-class="router--active"
      v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('drivers')"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="25px" :src="require('../../assets/images/icons/005-driving.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>DRIVERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white" v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('drivers')"/>
    <q-item
      clickable
      to="/dashboard/routes"
      active-class="router--active"
      v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('routes')"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="25px" :src="require('../../assets/images/icons/006-way.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>ROUTES</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white" v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('routes')"/>
    <q-item
      clickable
      to="/dashboard/depots"
      active-class="router--active"
      v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('depots')"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="25px" :src="require('../../assets/images/icons/006-way.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>DEPOTS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white" v-if="(userLevel!=='driver' && userLevel !== 'user') || checkUserRoles('depots')"/>
    <q-item
      clickable
      to="/dashboard/driver-performance"
      active-class="router--active"
      v-if="userLevel==='driver'"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/004-graphic.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>PERFORMANCE</q-item-label>
      </q-item-section>
    </q-item>
    <!-- <q-item
      clickable
      to="/dashboard/locator-search"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="22px" :src="require('../../assets/images/icons/004-graphic.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>LOCATOR</q-item-label>
      </q-item-section>
    </q-item> -->
  </div>
</template>

<style lang="stylus">
.router--active
  color: var(--q-color-blue-7)
</style>

<script>
export default {
  name: 'BaseDrawer',
  computed: {
    // ...mapFields('commons', ['pageMeta'])
    userLevel: {
      get () {
        return this.$store.state.auth.userLevel
      }
    },
    userRoles: {
      get () {
        return this.$store.state.auth.userRoles
      }
    }
  },
  methods: {
    checkUserRoles (pageURL) {
      console.log('check roles', this.userRoles.includes(pageURL))
      return this.userRoles.includes(pageURL)
    }
  }
}
</script>

<style>
</style>
