<script setup>
import { ref, onMounted } from 'vue'
import Seal from '../components/Seal.vue'
import LangBadge from '../components/LangBadge.vue';
import Barcode from '../assets/images/barcode.svg'
import { getProject } from '@/data/loader.js'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  depth: {
    type: String,
    required: false,
    default: "80px",
  },
  rot: {
    type: String,
    required: false,
    default: "0deg",
  }
})

const project = getProject(props.name)
const primaryColor = project.primaryColor
var rotation = ref("0deg")

const projectCovers = import.meta.glob('@/assets/images/projects/*.png', { eager: true, import: 'default' });
const coverImage = projectCovers[`/src/assets/images/projects/${project.coverImage}`];

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
    <div class="project__box">
      <div class="project__front">
        <div class="project-title">{{ project.name }}</div>
        <div class="project-cover" id="cover">
          <img :src="coverImage" alt="project cover" class="project-cover-img">
        </div>
        <LangBadge class="project-lang" :lang="project.lang" :image="project.icon"/>
        <Seal class="project-seal"/>
      </div>
      <div class="project__left">
        <div class="project__left-title">{{ project.name }}</div>
      </div>
      <div class="project__right"></div>
      <div class="project__back">
        <h2 class="p-2">{{ project.name }}</h2> 
        <p class="p-2">{{ project.description }}</p>
        <img :src="Barcode" alt="barcode" class="project__back-barcode"/>
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="project__back-nintendont">Github</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

$depth: v-bind(depth);
$depth-neg: calc($depth * -1);  

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
  z-index: 100;

  &:hover {
    .project__box {
      transform-origin: center center calc($depth-neg / 2); 
      transform: rotateY(180deg);
    }
  }
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

  &-title {
    position: absolute;
    font-family: Arial;
    text-transform: uppercase;
    font-weight: 800;
    text-align: center;
    top: 54%;
    left: 0;
    width: 100%;
    font-size: 28px;
    color: v-bind(primaryColor);
    transform: rotate(-10deg);
    overflow: clip;
  }

  &-cover {
    margin: -10%;
    width: 120%;
    height: 60%;
    transform: rotate(-10deg);
    background-color: v-bind(primaryColor);
    overflow: hidden;

    &-img {
      position: absolute;
      transform: rotate(10deg);
      top: 10%;
      left: 0;
      clip-path: url(#cover);
    }
  }

  &-lang {
    position: absolute;
    bottom: 6px;
    left: 6px;
  }

  &__front, &__back {
    width: 100%;
    height: 100%;
    border: black solid 6px;
    background-color: #494649;
    backface-visibility: hidden;
    overflow: clip;
  }

  &__back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg) translateZ($depth);
    display: flex;
    flex-direction: column;

    &-barcode {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      pointer-events: none;
    }

    &-nintendont {
      font-family: "Silkscreen", sans-serif;
      color: #d23d3d;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 6px;
      right: 6px;
      font-size: 20px;
      padding: 0 6px;
      font-weight: bold;
      border: #d23d3d solid 6px;
      border-radius: 50px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__left, &__right {
      content: '';
      position: absolute;
      top: 0;
      width: $depth;
      height: 100%;
      border: solid black 6px;
      background-color: #494649;
      backface-visibility: hidden;
    }

    &__left {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      left: 0;
      transform-origin: 0%;
      transform: translate3d(0px, 0px, $depth-neg) rotateY(-90deg);

      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        font-size: 2rem;
        width: 100%;
        color: black;
        text-align: center;
        margin-top: 1rem;
        background-color: v-bind(primaryColor);
        writing-mode: sideways-lr;
      }
    }

    &__right {
      right: 0;
      transform-origin: 100%;
      transform: translate3d(0px, 0px, $depth-neg) rotateY(90deg);
    }
}

</style>
