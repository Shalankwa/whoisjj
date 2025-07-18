<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/Screen.vue'
import Sidebar from './components/Sidebar.vue';
import Screen from './components/Screen.vue'
</script>

<template>
  <header></header>
  <body>
    <Screen>
      <RouterView />
    </Screen>
    <Sidebar /> 
  </body>
</template>

<style scoped>

</style>
