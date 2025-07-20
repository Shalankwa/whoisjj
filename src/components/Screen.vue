<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isSkillsPage = computed(() => route.path.startsWith('/skills'))

</script>

<template>
  <div class="main-content" :class="{ right: isSkillsPage }">
    <div class="retro-pc-container">
      <div class="pc-screen scanlines">
        <slot></slot>
      </div>
      <img src="../assets/images/retro_pc_clear_cropped.png" alt="Retro PC" class="retro-pc">
    </div>
  </div>
</template>

<style lang="scss">

.main-content {
  position: relative;
  width: fit-content;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.5s ease-in-out;

  margin-left: $sidebar-width;

  &.right {
    margin-left: 450px;
  }
}

.retro-pc-container {
  position: relative;
}

.retro-pc {
  position: relative;
  z-index: 2;
  pointer-events: none;
  max-height: 100vh;
}

.pc-screen {
  font-family: "Bitcount Grid Double", system-ui;
  position: absolute;
  top: 8%;
  left: 15%;
  width: 71%;
  height: 55%;
  padding: 20px;
  padding-left: 25px;
  color: #cdff8b;
  background-color: #696a6a;
  z-index: 1;

  h2 {
    font-size: 24px;
  }

  h3 {
    font-size: 20px;
  }
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

@media screen and (max-width: $desktop-width) {
  .pc-screen {
    h2 {
      font-size: 18px;
    }
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
}

</style>
