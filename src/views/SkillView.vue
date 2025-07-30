
<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import LoadingBar from '../components/LoadingBar.vue'
import { getSkill } from '@/data/loader.js'
import LevelBar from '../components/LevelBar.vue'

const route = useRoute()
var skill = ""
var skilldata = ""
var currentLvl = 0
var icon = ""

const lvls = [
  "Beginner",
  "Apprentice",
  "Novice",
  "Intermediate",
  "Skilled",
  "Advanced",
  "Expert",
  "Master",
  "Legendary",
]

const skills = import.meta.glob('@/assets/images/skills/*.svg', { eager: true, import: 'default' });

function loadData() {
  skill = route.params.skill
  skilldata = getSkill(skill)
  currentLvl = lvls[Math.floor(skilldata.proficiency * (lvls.length - 1))]
  icon = skills[`/src/assets/images/skills/${skilldata.icon}`];
}


watch(route, () => {
  loadData()
})

loadData()
</script>

<template>
  <LoadingBar :key="skill"/>
  <div class="skill-container" :key="skill">
    <div class="skill-header">
      <div class="skill-header-text p-4">
        <h1>{{ skilldata.name }}</h1>
        <h3>Class: {{ skilldata.category }}</h3>
      </div>
      <div class="skill-header-icon p-1">
        <img :src="icon" alt="python">
      </div>
    </div>
    <div class="skill-description p-4">
      {{ skilldata.description }}
    </div>
    <div class="skill-level p-4">
      <p>Lvl {{ skilldata.proficiency * 100 }}: {{ currentLvl }}</p>
      <LevelBar :fillPercent="skilldata.proficiency * 100"/>
    </div>
  </div>

</template>

<style scoped lang="scss">

.skill {
  &-container {
    display: flex;
    flex-direction: column;
    overflow: auto;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    border: black solid 3px;
    background-color: gray;
  }

  &-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;

    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      h1 {
        font-size: 32px;
        margin-bottom: 0;
      }

      h3 {
        font-size: 20px;
        margin-top: 0;
      }
    }

    &-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      border-left: black solid 3px;
    }
  }

  &-description {
    flex-grow: 1;
    border-top: black solid 3px;
    border-bottom: black solid 3px;
  }
}

</style>
