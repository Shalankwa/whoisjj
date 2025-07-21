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
          <p class="arrow">▲</p>
        </div>
      </div>
    </template>
    <template #back>
      <div class="card-back">
        <div class="flex flex-col items-center p-4 h-8/10 w-full overflow-y-auto">
          <h1>> Whoami?</h1>
          <hr>
          <div class="mb-4">
            <p class="mt-4 indent-4">
              Hello! My name is Jonathan, but most people call me JJ. I'm a Canadian-born software engineer currently living in Tokyo, Japan.
              I moved here in 2020 and decided to stay after falling in love with the mountainous landscape and delicious food.
            </p>
            <p class="mt-4 indent-4">
              I have a passion for learning new things and solving difficult problems.
              I enjoy working with other people and collaborating on projects to create new and exciting software.
            </p>
          </div>
          <hr>
          <p class="arrow back">▲</p>
        </div>
      </div>
    </template>
  </FlipCard>
</template>

<style scoped lang="scss">

$card-primary-color: #b8e0c8;
$card-secondary-color: #8ead9a;

.arrow {
  position: absolute;
  width: fit-content;
  right: 20px;
  color: #eed1b3;
  rotate: 90deg;
  font-size: 28px;
  line-height: 40px;
  cursor: pointer;

  &.back {
    rotate: 270deg;
    bottom: 6%;
    left: 20px;
  }
}

hr {
  width: 100%;
  border: #b8e0c8 solid 2px;
}

@keyframes fliphint {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.card-header {
  display: flex;
  align-items:  center;
  gap: 4px;
  justify-content: space-between;
  background-color: $card-secondary-color;
  color: white;
  padding: 10px;
  margin-top: 21px;

  h2 {
    padding: 4px 20px;
    border-top: $card-primary-color solid 4px;
    border-bottom: $card-primary-color solid 4px;
  }

  h3 {
    padding: 10px 20px;
    background-color: $card-primary-color;
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
    background-color: $card-secondary-color;
    padding: 8px 12px;
  }
}

.card-front, .card-back {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: $card-primary-color;
  color: white;

  &:hover {
    .arrow {
      animation: fliphint 0.5s infinite;
    }
  }
}

.card-back {
  height: 100%;
  background-color: $card-secondary-color;

  &::before {
    content: "";
    position: absolute;
    bottom: 5%;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: $card-primary-color;
  }
}

.trainer {
  /* width: 160px; */
  padding: 4px;
  background-color: $card-secondary-color;
  height: 100%;
}

.card-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: $card-secondary-color;
  margin-bottom: 18px;
  padding: 4px 14px;

  transition: all 0.5s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    width: 100%;
    border-bottom: $card-secondary-color solid 4px;
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
