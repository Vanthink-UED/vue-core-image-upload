<template>

  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <header-nav></header-nav>
    <div class="container">
      <nav-list></nav-list>
      <div class="page main">
        <router-view></router-view>
      </div>
    </div>

    <ft></ft>
  </div>
</template>

<style>
</style>

<script>
import headerNav from './Header.vue'
import navList from './NavList.vue'
import ft from './Footer.vue'
export default {
  components: {
    'header-nav': headerNav,
    'nav-list': navList,
    'ft': ft,
  },

  created() {
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}

</script>
