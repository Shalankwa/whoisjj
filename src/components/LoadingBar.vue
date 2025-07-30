
<script setup>
import { onMounted } from 'vue';


onMounted(() => {
  setTimeout(() => {
    document.querySelector('.loading-bar-container').classList.add('hide')
  }, 250)
})

</script>

<template>
  <div class="loading-bar-container">
    <p>Loading...</p>
    <div class="loading-bar">
      <div class="loading-bar-inner"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.loading-bar-container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #696a6a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 24px;
  z-index: 10;

  &.hide {
    opacity: 0;
    pointer-events: none;
  }
}

.loading-bar {
  width: 200px;
  height: 20px;
  transition: all 0.5s ease-in-out;
  border: 2px solid #cdff8b;
}

.loading-bar-inner {
  background-color: #cdff8b;
  width: 0%;
  height: 100%;
  animation: fill 0.25s linear forwards;
}

@keyframes fill {
  0% { width: 0%; }
  100% { width: 100%; }
}
</style>