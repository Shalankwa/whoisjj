<script setup>
import FlipCard from '@/components/FlipCard.vue'
</script>

<template>
  <FlipCard>
    <template #front>
      <div class="flex flex-col card-front">
        <div class="card-header">
          <h2>Programmer Card</h2>
          <img class="pixel-perfect" src="../assets/images/ca_flag.png" alt="canada"> 
          <h3 class="pixel-corners-small">GITHUB ID: <a href="https://www.github.com/Shalankwa" target="_blank">Shalankwa</a></h3>
        </div>
        <div class="flex-1 mt-4 mb-4 flex justify-center gap-4 ml-4 mr-4">
          <img class="trainer pixel-corners-small pixel-perfect" src="../assets/images/Trainer.png" alt="about" />
          <div class="card-info">
            <div class="pixel-corners-small">
              <p>Name:</p>
              <p>Jonathan Joseph Takiguchi-Goodman</p>
            </div>
            <div class="pixel-corners-small">
              <p>Title:</p>
              <p>Lead Software Engineer</p>
            </div>
            <div class="pixel-corners-small">
              <p>Education:</p>
              <p>Batchlors of Computer Science</p>
            </div>
            <div class="pixel-corners-small">
              <p>Email:</p>
              <p>jonathangoodman.j@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <a class="badge" href="https://www.linkedin.com/in/jonathan-goodman-a94bb7157/" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/icons/linkedin.svg" alt="github">
          </a>
          <a class="badge" href="https://www.github.com/Shalankwa" target="_blank" rel="noopener noreferrer">
            <img src="../assets/images/icons/github.svg" alt="github">
          </a>
        </div>
      </div>
    </template>
    <template #back>
      <div class="card-back">
        <h1>Stuff back</h1>
        <p>THis is the back side</p>
      </div>
    </template>
  </FlipCard>
</template>

<style scoped lang="scss">

.card-header {
  display: flex;
  align-items:  center;
  gap: 4px;
  justify-content: space-between;
  background-color: #8ead9a;
  color: white;
  padding: 10px;
  margin-top: 21px;

  h2 {
    padding: 4px 20px;
    border-top: #b8e0c8 solid 4px;
    border-bottom: #b8e0c8 solid 4px;
  }

  h3 {
    padding: 10px 20px;
    background-color: #b8e0c8;
  }
}

.card-info {
  flex-grow: 1;
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;
    background-color: #8ead9a;
    padding: 8px 12px;
  }
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  background-color: #b8e0c8;
  color: white;
}

.card-back {
  height: 100%;
}

.trainer {
  /* width: 160px; */
  padding: 4px;
  background-color: #8ead9a;
  height: 100%;
}

.card-footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #8ead9a;
  margin-bottom: 18px;
  padding: 4px 14px;

  transition: all 0.5s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 100%;
    border-bottom: #8ead9a solid 4px;
  }

  .badge {
    position: relative;
    width: 40px;
    height: 40px;
    perspective: 1000px;
    transform-style: preserve-3d;

    img {
      position: absolute;
    }

    &:hover {
      img {
        animation: spin 0.5s linear infinite;
      }
    }
  }
}

@keyframes spin {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}

</style>