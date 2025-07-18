<script setup>
import { ref, onMounted, onUnmounted } from 'vue'


const card = ref(null)
let bounds

function rotateToMouse(e) {
  if (!bounds || !card.value) return

  const mouseX = e.clientX
  const mouseY = e.clientY
  const leftX = mouseX - bounds.x
  const topY = mouseY - bounds.y
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  }
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

  card.value.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 4}deg
    )
  `

  const glow = card.value.querySelector('.glow')
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
  if (!card.value) return
  bounds = card.value.getBoundingClientRect()
  document.addEventListener('mousemove', rotateToMouse)
}

function handleLeave() {
  document.removeEventListener('mousemove', rotateToMouse)
  if (card.value) {
    card.value.style.transform = ''
    const glow = card.value.querySelector('.glow')
    if (glow) {
      glow.style.backgroundImage = ''
    }
  }
}

onMounted(() => {
  if (card.value) {
    card.value.addEventListener('mouseenter', handleEnter)
    card.value.addEventListener('mouseleave', handleLeave)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', rotateToMouse)
  if (card.value) {
    card.value.removeEventListener('mouseenter', handleEnter)
    card.value.removeEventListener('mouseleave', handleLeave)
  }
})
</script>

<template>
  <div class="card-container">
    <div ref="card" class="card">
      3D Card
      <!-- <div class="glow"></div> -->
    </div>
  </div>
</template>

<style scoped lang="scss">

.card {

  font-weight: bold;
  padding: 1em;
  text-align: right;
  color: #181a1a;
  
  width: 200px;
  height: 275px;
  box-shadow: 0 1px 5px #00000099;
  
  border-radius: 10px;
  background-image: url(https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
  background-size: cover;
  
  position: relative;
  
  transition-duration: 300ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  transform: rotate3d(0);


  transform-style: preserve-3d;

  &::before {
    background: linear-gradient(to bottom, #fff1c4 0%, #928562 90%);
    content: '';
    border-radius: 10px;
    width: 200px;
      height: 275px;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateZ(-18px);
  }

  // &::after {
  //   background-color: #262626;
  //   background-image: url(https://images.unsplash.com/photo-1557672199-6e8c8b2b8fff?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80);
  //   bottom: 0;
  //   content: '';
  //   left: 45px;
  //   position: absolute;
  //   top: 0;
  //   transform: rotateY(-90deg);
  //   transform-origin: 100% 50%;
  //   width: 25px;
  //   z-index: -10;
  // }

  &-container {
    perspective: 1500px;
    width: fit-content;
    padding: 1em;
  }
}

.card:hover {
  transition-duration: 150ms;
  box-shadow: 0 5px 20px 5px #00000044;
}

.card .glow {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
}

</style>
