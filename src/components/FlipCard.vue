<script setup>
import { ref } from 'vue'

const props = defineProps({
  flipped: {
    type: Boolean,
    required: false,
    default: false,
  },
})

var flipped = ref(props.flipped)

</script>

<template>
    <div class="flip-card" :class="{ flipped: flipped }" @click="flipped = !flipped">
        <div class="front pixel-corners">
            <slot name="front"></slot>
        </div>
        <div class="back pixel-corners">
            <slot name="back"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
.flip-card {
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    border-radius: 4px;
    box-shadow: 0 1px 5px #00000099;
  }

  .front {
    transform: rotateY(0deg);
  }

  .back {
    transform: rotateY(180deg);
  }
}
</style>