<script setup>
import FlipCard from '@/components/FlipCard.vue'
</script>

<template>
  <FlipCard>
    <template #front>
      <h1>About</h1>
      <p>I'm a Software Engineer living in Tokyo, Japan.</p>
      <p>Take a look around and see what I've been up to!</p>
    </template>
    <template #back>
      <h1>Stuff back</h1>
      <p>THis is the back side</p>
    </template>
  </FlipCard>
</template>

<style></style>