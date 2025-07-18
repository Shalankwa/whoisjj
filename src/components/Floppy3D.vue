<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { computed } from 'vue'

const props = defineProps({
  colour: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
})

const imageMap = {
  red: new URL('../assets/images/red_floppy.png', import.meta.url).href,
  blue: new URL('../assets/images/blue_floppy.png', import.meta.url).href,
  green: new URL('../assets/images/green_floppy.png', import.meta.url).href,
  orange: new URL('../assets/images/orange_floppy.png', import.meta.url).href,
  purple: new URL('../assets/images/purple_floppy.png', import.meta.url).href,
  tan: new URL('../assets/images/tan_floppy.png', import.meta.url).href,
  teal: new URL('../assets/images/teal_floppy.png', import.meta.url).href,
}

const imageSrc = computed(() => imageMap[props.colour] || imageMap.red)

const floppy = ref(null)
let bounds

function rotateToMouse(e) {
  if (!bounds || !floppy.value) return

  const mouseX = e.clientX
  const mouseY = e.clientY
  const leftX = mouseX - bounds.x
  const topY = mouseY - bounds.y
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  }
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

  floppy.value.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 6}deg
    )
  `

  const glow = floppy.value.querySelector('.glow')
  if (glow) {
    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff55,
        #0000000f
      )
    `
  }
}

function handleEnter() {
  if (!floppy.value) return
  bounds = floppy.value.getBoundingClientRect()
  document.addEventListener('mousemove', rotateToMouse)
}

function handleLeave() {
  document.removeEventListener('mousemove', rotateToMouse)
  if (floppy.value) {
    floppy.value.style.transform = ''
    const glow = floppy.value.querySelector('.glow')
    if (glow) {
      glow.style.backgroundImage = ''
    }
  }
}

onMounted(() => {
  if (floppy.value) {
    floppy.value.addEventListener('mouseenter', handleEnter)
    floppy.value.addEventListener('mouseleave', handleLeave)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', rotateToMouse)
  if (floppy.value) {
    floppy.value.removeEventListener('mouseenter', handleEnter)
    floppy.value.removeEventListener('mouseleave', handleLeave)
  }
})
</script>

<template>
  <div class="floppy-container">
    <div ref="floppy" class="floppy-3d">
      <div class="floppy-label">
        <p class="floppy-text">{{ text }}</p>
      </div>
      <!-- <div class="glow"></div> -->
      <div class="floppy-reader"></div>
    </div>
  </div>

</template>

<style scoped lang="scss">

.floppy-container {
  width: fit-content;
  padding: 12px;
  perspective: 400px;
  cursor: pointer;
}

.floppy-label {
  position: absolute;
  width: 70%;
  height: 60%;
  margin-left: 15%;
  border: rgba(0, 0, 0, 0.2) solid 1px;
  border-top: #ac3232 solid 3px;
  border-radius: 0 0 2px 2px;
  // background-color: white;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    border: white solid 10px;
    border-radius: 0 0 2px 2px;
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 2px,
      rgba(0, 0, 0, 0.4) 4px,
      transparent 0px,
      transparent 24px
    );
  }
}

.floppy-reader {
  position: absolute;
  left: 20%;
  bottom: 0;
  width: 60%;
  height: 25%;
  border: rgba(0, 0, 0, 0.2) solid 1px;
  border-radius: 2px 2px 0 0;
  border-bottom: 0;

  &::after {
    content: '';
    position: absolute;
    left: 30%;
    width: 70%;
    height: 100%;
    border-left: 38px solid #dddddd;
    border-right: 12px solid #dddddd;
    border-top: 6px solid #dddddd;
    border-bottom: 6px solid #dddddd;
  }
}

.floppy-3d {
  position: relative;
  width: 160px;
  height: 160px;
  background-color: v-bind(colour);
  border-radius: 4px;

  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);

  transform-style: preserve-3d;

  &::before {
    background: v-bind(colour);
    opacity: 40%;
    content: '';
    border-radius: 4px;
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(-10px);
  }

  &:hover {
    transition-duration: 150ms;
  }

  .glow {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    
    background-image: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(255, 255, 255, 0.08),
      rgba(255, 255, 255, 0.00)
    );
  }

  img {
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    top: 15px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #ac3232;
    pointer-events: none;
    font-family: "Permanent Marker", cursive;
    font-weight: 400;
    font-style: normal;
  }

  img {
    pointer-events: none;
  }
  
}
</style>
