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
          <img width="22px" :src="require('../../assets/images/icons/001-group.svg')">
        </q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label style="color: white">USERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-separator v-if="userLevel==='admin'" color="white"/>
    <q-item
      clickable
      to="/dashboard/schedules"
      active-class="router--active"
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
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/performance"
      active-class="router--active"
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
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/drivers"
      active-class="router--active"
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
    <q-separator color="white"/>
    <q-item
      clickable
      to="/dashboard/routes"
      active-class="router--active"
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
