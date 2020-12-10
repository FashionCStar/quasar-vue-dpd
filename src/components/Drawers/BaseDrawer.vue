<template>
  <div>
    <q-item-label header>Menu</q-item-label>
    <!-- <q-item
      clickable
      to="/dashboard/buyers"
    >
      <q-item-section avatar>
        <q-icon name="fas fa-user-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Buyers</q-item-label>
      </q-item-section>
    </q-item> -->
    <q-item
      clickable
      to="/dashboard/users"
      v-if="userLevel==='admin'"
    >
      <q-item-section avatar>
        <q-icon name="fas fa-user-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>USERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/reports"
    >
      <q-item-section avatar>
        <q-icon name="fas fa-user-alt" />
      </q-item-section>
      <q-item-section>
        <q-item-label>SCHEDULE</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/performance"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>PERFORMANCE</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/couriers"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>COURIERS</q-item-label>
      </q-item-section>
    </q-item>
    <q-item
      clickable
      to="/dashboard/routes"
    >
      <q-item-section avatar>
        <q-icon name="school" />
      </q-item-section>
      <q-item-section>
        <q-item-label>ROUTES</q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

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
