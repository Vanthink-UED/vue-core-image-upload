<template>

  <div id="app">
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
}

</script>
