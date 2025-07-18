<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Floppy from './Floppy3D.vue'

const skills = ref([
  {
    name: 'JavaScript',
    colour: '#ac3232',
    icon: 'red_floppy.png',
  },
  {
    name: 'HTML',
    colour: '#8f974a',
    icon: 'blue_floppy.png',
  },
  {
    name: 'CSS',
    colour: '#df7126',
    icon: 'green_floppy.png',
  },
  {
    name: 'React',
    colour: 'beige',
    icon: 'orange_floppy.png',
  },
  {
    name: 'Node.js',
    colour: '#306082',
    icon: 'purple_floppy.png',
  },
  {
    name: 'JavaScript',
    colour: '#8f974a',
    icon: 'red_floppy.png',
  },
  {
    name: 'HTML',
    colour: '#306082',
    icon: 'blue_floppy.png',
  },
  {
    name: 'CSS',
    colour: 'teal',
    icon: 'green_floppy.png',
  },
  {
    name: 'React',
    colour: '#ac3232',
    icon: 'orange_floppy.png',
  }
])

const route = useRoute()
const isSkillsPage = computed(() => route.path === '/skills')

</script>

<template>
  <div class="skills" :class="{ show: isSkillsPage }">
    <div v-for="skill in skills" :key="skill.name" class="skill">
      <Floppy :colour="skill.colour" :text="skill.name" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  position: absolute;
  z-index: 100;
  width: 200px;
  top: -100vh;
  left: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 100vh;
  transition: all 0.5s ease-in-out;

  &.show {
    top: 0;
  }
}

</style>
