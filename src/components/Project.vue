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
    <div class="project__front" ref="project">
      {{ name }}
      <div class="project-seal">
        <Seal />
      </div>
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
    
  &__front {
    resize: both;
    position: relative;
    border: black solid 6px;
    // background-color: black;
    display: inline-block;
    height: calc(250px * 1.4); 
    width: 250px;
    z-index: 2;
    transition: all linear 0.5s;
    transform-style: preserve-3d;
    transform: rotateY(v-bind(rotation));
    background-color: #5a5a5a;


    &::after, &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 80px;
      height: 100%;
      height: calc(100% + 12px);
      border: solid black 6px;
      background-color: #5a5a5a;
    }

    &::before {
      left: 0;
      transform-origin: 0%;
      transform: translate3d(-6px, -6px, -80px) rotateY(-90deg);
    }

    &::after {
      right: 0;
      transform-origin: 100%;
      transform: translate3d(6px, -6px, -80px) rotateY(90deg);
    }
  }
}

</style>
