<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
})

const typewriter = ref('')
const text = props.msg
const index = ref(0)

onMounted(() => {
  setTimeout(() => {
    typewrite(text)
  }, 1000)
})

function typewrite(text) {
  if (index.value < text.length) { 
    typewriter.value += text[index.value]
    index.value++
    setTimeout(() => {
      typewrite(text)
    }, 50)
  }
}

</script>

<template>
  <p class="typewriter">{{ typewriter }}</p>
</template>

<style scoped lang="scss">
.typewriter {
  min-height: 1.5em;
  min-width: 12px;
  white-space: nowrap;
  overflow: hidden;
  border-right: 8px solid #cdff8b;
  animation: blink-caret 0.75s infinite alternate;
  font-size: 1.5em;
  line-height: 1.5em;
  width: fit-content;
}

@keyframes blink-caret {
  50% { border-color: transparent; }
}
</style>