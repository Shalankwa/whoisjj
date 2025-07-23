<script setup>
import { ref, onMounted } from 'vue'
import Seal from '../components/Seal.vue'

const project = ref(null)
var rotation = ref("0deg")

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  rot: {
    type: String,
    required: false,
    default: "0deg",
  }
})

defineExpose({
  setRotation(angle) {
    rotation.value = angle
  }
})

onMounted(() => {
  rotation.value = props.rot
})

</script>

<template>
  <div class="frame__3d">
    <div class="project__box" ref="project">
      <div class="project__front">
        {{ name }}
        <div class="project-seal">
          <Seal />
        </div>
      </div>
      <div class="project__left"></div>
      <div class="project__right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.project-seal {
  position: absolute;
  bottom: 2%;
  right: 2%;
}

.frame__3d {
  width: fit-content;
  height: 100%;
  max-height: 350px;
  perspective: 1200px;
  transform-style: preserve-3d;
}

.project {
    
  &__box {
    position: relative;
    height: calc(250px * 1.4); 
    width: 250px;
    transition: all linear 0.5s;
    transform-style: preserve-3d;
    transform: rotateY(v-bind(rotation));
  }

  &__front {
    width: 100%;
    height: 100%;
    border: black solid 6px;
    background-color: #5a5a5a;
  }

  &__left, &__right {
      content: '';
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      border: solid black 6px;
      background-color: #5a5a5a;
    }

    &__left {
      left: 0;
      transform-origin: 0%;
      transform: translate3d(0px, 0px, -80px) rotateY(-90deg);
    }

    &__right {
      right: 0;
      transform-origin: 100%;
      transform: translate3d(0px, -0px, -80px) rotateY(90deg);
    }
}

</style>
