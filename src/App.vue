<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue';
import Screen from './components/Screen.vue'
import Background from './components/Background.vue'
</script>

<template>
  <header></header>
  <Background />
  <Screen>
    <RouterView />
  </Screen>
  <Sidebar /> 
</template>

<style scoped>

</style>
