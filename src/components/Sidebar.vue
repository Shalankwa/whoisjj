<script setup>
import Skills from './Skills.vue'
import HardDrive from './HardDrive.vue'
import { ref } from 'vue'

const expanded = ref(false)

var open = "📂";
var closed = "📁";
</script>

<template>
  <div class="bg-faded" :class="{ show: expanded }" @click="expanded = false"></div>
  <div class="sidebar-toggle" @click="expanded = !expanded" :class="{ flip: expanded }">{{ expanded ? open : closed }}</div>
  <div class="sidebar" :class="{ show: expanded }">
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
  overflow-y: auto;

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

  &-toggle {
    display: none;
    position: fixed;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    line-height: 32px;
    top: 10px;
    left: 10px;
    width: 45px;
    height: 45px;
    color: #cdff8b;
    background-color: #5a5a5a;
    border: #cdae92 solid 2px;
    z-index: 101;
  }
}

.bg-faded {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  z-index: 50;

  &.show {
    display: block;
  }
}

@media screen and (max-width: $desktop-width) {
  .sidebar {
    left: -$sidebar-width;
    transition: left 0.2s ease-in-out;
    justify-content: flex-start;
    padding-top: 60px;

    &.show {
      left: 0;
    }

    &-toggle {
      display: flex;
    }
  }
}

</style>
