<script setup>
const props = defineProps({
  colour: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <div class="hard-drive">
    <img src="../assets/images/HardDrive_Medium.png" draggable="false">
    <p>{{ label }}</p>
  </div>
</template>

<style scoped lang="scss">
.hard-drive {
  position: relative;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  z-index: 102;

  img {
    width: 120px;
    pointer-events: none;
  }

  p {
    position: absolute;
    background-color: v-bind(colour);
    text-align: center;
    margin: 0 7%;
    padding: 0 5px;
    width: 86%;
    bottom: 18%;
    font-family: "Silkscreen", sans-serif;
    font-weight: bold;
    font-size: 14px;
    color: #ffffff;
  }

  &:hover {
    // shake animation
    animation: shake 0.15s;
  }
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  20% { transform: translate(-1px, -2px) rotate(-1deg); }
  40% { transform: translate(-3px, 0px) rotate(1deg); }
  60% { transform: translate(1px, 2px) rotate(0deg); }
  80% { transform: translate(-1px, -2px) rotate(1deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

</style>