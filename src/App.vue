<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>

import AppHeader from './components/shared/Header'
import AppFooter from './components/shared/Footer'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
}
</script>

<style>
#app{
  background:#eee;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}
</style>
