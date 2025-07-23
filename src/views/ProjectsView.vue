<script setup>
import { onMounted, ref, useTemplateRef } from 'vue';
import { clamp } from '@/utils/toolbox';
import Seal from '../components/Seal.vue'
import Project from '../components/Project.vue'

const itemWidth = 250; 
const itemWidthpx = itemWidth + 'px';

const projects = ref(["Project1", "Project2", "Project3", "Project4"]);
const itemRefs = useTemplateRef('items');

var currIndex = 0;

const slider = ref(null);
const carousel = ref(null);

onMounted(() => {
  move(currIndex);
})

function prev() {
  currIndex = clamp(--currIndex, 0, projects.value.length - 1)
  move(currIndex);
}

function next() {
  currIndex = clamp(++currIndex, 0, projects.value.length - 1)
  move(currIndex);
}

function move(index) {
  slider.value.style.transform = `translate3d(${index * -itemWidth}px, 0, 0)`;

  itemRefs.value.forEach((item, i) => {
    if(i === index) {
      item.setRotation("0deg")
    } else if(i < index) {
      item.setRotation("40deg")
    } else {
      item.setRotation("-40deg")
    }
  });
}

</script>

<template>
  <div class="carousel" ref="carousel">
    <h1>Projects!</h1>
    <div class="carousel__slider" ref="slider">
      <div v-for="project in projects">
        <Project :name="project" :width="itemWidthpx"  ref="items" /> 
      </div>
    </div>
    <div class="flex justify-center gap-6">
      <div class="carousel__prev text-4xl cursor-pointer" @click="prev"><</div>
      <div class="carousel__next text-4xl cursor-pointer" @click="next">></div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.carousel {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &__slider {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    width: fit-content;
    padding: 20px 0;
    align-items: center;
    margin-left: calc(50% - (v-bind(itemWidthpx) / 2));
    transition: all 0.5s ease-in-out;
  }
}

</style>
