<script setup>

const props = defineProps({
  fillPercent: {
    type: Number,
    required: true,
    default: 0,
    validator: (value) => value >= 0 && value <= 100,
  }
})

const fillPercentString = props.fillPercent + '%'

</script>

<template>
  <div class="level-bar">
    <div class="fill"></div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
$barColor: #9654b0;
$barColorLight: color.adjust($barColor, $lightness: 20%);

.level-bar {
  position: relative;
  width: 100%;
  height: 32px;
  overflow: clip;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: black solid 3px;
    border-left: none;
    background-image: repeating-linear-gradient(
      to right,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 3px,
      transparent 2px,
      transparent 10%
    );
  }

  .fill {
    position: relative;
    height: 100%;
    width: v-bind(fillPercentString);
    background: linear-gradient(90deg, $barColor 80%, $barColorLight 100%);
    background-size: 200% 200%;
    animation: gradient-animation 2s ease infinite;

    @keyframes gradient-animation {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: -100% 50%;
      }
    }
  }
}

</style>