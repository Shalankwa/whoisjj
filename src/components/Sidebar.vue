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
  position: fixed;
  top: 0;
  left: 0;
  width: $sidebar-width;
  height: 100vh;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eed1b3;
  border: 4px solid #6f6967;
  z-index: 100;

  &::after {
    content: "Fragile";
    font-family: "Silkscreen", sans-serif;
    font-size: 20px;
    position: absolute;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    text-align: center;
    z-index: 100;
    background-color: #c09b7b;
    color: transparent;
    text-shadow: 2px 2px 3px #eed1b3;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    pointer-events: none;
  }
}

</style>
