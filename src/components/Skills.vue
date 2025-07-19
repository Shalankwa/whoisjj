<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Floppy from './Floppy3D.vue'

import { skills } from '@/data/skills.js'


const route = useRoute()
const isSkillsPage = computed(() => route.path.startsWith('/skills'))

</script>

<template>
  <div class="skills" :class="{ show: isSkillsPage }">
    <div v-for="[key, skill] in Array.from(skills)" :key="key" class="skill">
      <RouterLink :to="`/skills/${key}`">
        <Floppy :colour="skill.colour" :text="skill.name" :icon="skill.icon" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  position: absolute;
  z-index: 100;
  width: 400px;
  top: -105vh;
  left: 160px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100vh;
  transition: top 0.5s ease-in-out;

  &.show {
    top: 0;
  }

  @media screen and (max-width: 1600px) {
    width: 200px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

</style>
