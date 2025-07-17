<script setup>
import FloppyTray from './FloppyTray.vue'
</script>

<template>
  <FloppyTray>
    <RouterLink class="floppy" to="/">
      <img src="../assets/images/blue_floppy.png">
      <p class="floppy-text">Home</p>
    </RouterLink>
    <RouterLink class="floppy" to="/about">
      <img src="../assets/images/green_floppy.png">
      <p class="floppy-text">About</p>
    </RouterLink>
    <RouterLink class="floppy" to="/skills">
      <img src="../assets/images/orange_floppy.png">
      <p class="floppy-text">Skills</p>
    </RouterLink>
    <RouterLink class="floppy" to="/projects">
      <img src="../assets/images/red_floppy.png">
      <p class="floppy-text">Projects</p>
    </RouterLink>
    <RouterLink class="floppy" to="/contact">
      <img src="../assets/images/purple_floppy.png">
      <p class="floppy-text">Contact</p>
    </RouterLink>
  </FloppyTray>
</template>

<style scoped lang="scss">

</style>
