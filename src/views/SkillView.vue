
<script setup>
import { skills } from '@/data/skills.js'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import LoadingBar from '../components/LoadingBar.vue'

const route = useRoute()

watch(route, () => {
  var skill = route.params.skill
  var skilldata = skills.get(skill)
  if (skilldata) {
    console.log(skilldata)
  }
})


function loadSkilldata(){}

</script>

<template>
  <LoadingBar :key="$route.fullPath"/>
  <h1>{{ $route.params.skill }}</h1>
  <p>test</p>
</template>

<style></style>
