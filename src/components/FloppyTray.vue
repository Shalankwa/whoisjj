<script setup>

</script>

<template>
  <div class="sidebar">
    <slot>
        <!-- Links go here -->
    </slot>
    <p class="box-text">Premium<br>Storage!</p>
  </div>
</template>

<style scoped lang="scss">
.sidebar {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 0;
  background-color: #eed1b3;
  border: 2px solid #faddc0;
  z-index: 100;

  &::after {
    content: "";
    text-align: center;
    font-family: Arial, sans-serif;
    font-style: italic;
    color: #faddc0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #eed1b3;
    z-index: 100;
    border-top: 2px solid #faddc0;
  }

  .box-text {
    position: absolute;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0px;
    text-align: center;
    z-index: 101;
    font: bold Arial, sans-serif;
    background-color: #cdae92;
    color: transparent;
    text-shadow: 2px 2px 3px #eed1b3;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    pointer-events: none;
  }
}

</style>