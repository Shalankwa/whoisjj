<script setup>
import TypeWriter from '../components/TypeWriter.vue'

const welcome = "\
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗\n\
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝\n\
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  \n\
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  \n\
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗\n\
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝\n\
"

</script>

<template>
  <div>
    <pre class="mb-4">{{ welcome }}</pre>
    <TypeWriter msg="Hello! It's nice to meet you :)"/>
    <p class="mt-4">I'm a Software Engineer living in Tokyo, Japan.</p>
    <p>Take a look around and see what I've been up to!</p>
  </div>
</template>

<style>

</style>
