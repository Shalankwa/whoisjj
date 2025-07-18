<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isSkillsPage = computed(() => route.path === '/skills')

</script>

<template>
  <div class="main-content" :class="{ right: isSkillsPage }">
    <div class="pc-screen scanlines">
      <slot></slot>
    </div>
    <img src="../assets/images/retro_pc_clear.png" alt="Retro PC" class="retro-pc">
  </div>
</template>

<style scoped lang="scss">

.main-content {
  position: relative;
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &.right {
    margin-left: 450px;
  }
}

.retro-pc {
  width: 1400px;
  z-index: 2;
  pointer-events: none;
}

.pc-screen {
  font-family: "Bitcount Grid Double", system-ui;
  position: absolute;
  top: 12%;
  width: 58%;
  height: 48%;
  padding: 20px;
  padding-left: 25px;
  color: #cdff8b;
  background-color: #696a6a;
  z-index: 1;
  // left: 50%;
  // transform: translate(-50%, -50%);
}

.scanlines {
  z-index: 0;
}

.scanlines::after {
  width: 100%;
  height: 100%;
  content: "";
  position: absolute;
  inset: 0;
  background-image: repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 2px,
    transparent 2px,
    transparent 4px
  );
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 1920px) {
  .retro-pc {
    width: 1000px;
  }

}

</style>
