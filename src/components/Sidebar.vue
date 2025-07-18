<script setup>
import FloppyTray from './FloppyTray.vue'
import Skills from './Skills.vue'
import HardDrive from './HardDrive.vue'
</script>

<template>
  <div class="sidebar">
    <RouterLink to="/">
      <HardDrive label="Home" colour="#4c98ce"/>
    </RouterLink>
    <RouterLink to="/about">
      <HardDrive label="About" colour="#b3bd5c"/>
    </RouterLink>
    <RouterLink to="/skills">
      <HardDrive label="Skills" colour="#ff8f2b"/>
    </RouterLink>
    <RouterLink to="/projects">
      <HardDrive label="Projects" colour="#d23d3d"/>
    </RouterLink>
    <RouterLink to="/contact">
      <HardDrive label="Contact" colour="#9654b0"/>
    </RouterLink>
  </div>
  <Skills />
</template>

<style scoped lang="scss">

.sidebar {
  display: flex;
  padding: 0 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  left: 0;
  background-color: #eed1b3;
  border: 2px solid #faddc0;
  z-index: 100;
}

</style>
