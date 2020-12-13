<template>
  <div>
    <!-- <q-item-label header>Menu</q-item-label> -->
    <q-item
      clickable
      to="/dashboard/users"
      v-if="userLevel==='admin'"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="40px" :src="require('../../assets/images/icons/users_icon.png')">
        </q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: white">USERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="userLevel==='admin'" color="white"/>
    <q-item
      clickable
      to="/dashboard/reports"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="40px" :src="require('../../assets/images/icons/schedule_icon.png')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>Schedule</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/performance"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="40px" :src="require('../../assets/images/icons/performance_ico.png')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>Performance</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/couriers"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="40px" :src="require('../../assets/images/icons/driver_icon.png')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>Drivers</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/routes"
      active-class="router--active"
    >
      <q-item-section avatar>
        <q-icon>
          <img width="40px" :src="require('../../assets/images/icons/routes_icon.png')">
        </q-icon>
      </q-item-section>
      <q-item-section class="text-white">
        <q-item-label>Routes</q-item-label>
      </q-item-section>
    </q-item>
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
    }
  }
}
</script>

<style>
</style>
