<script setup>
</script>

<template>
  <div class="seal">
    <p>Authentic</p>
    <div class="aino">NOAINOAI</div>
    <p>No AI Inside.</p>
  </div>
</template>

<style scoped lang="scss">
.aino {
  text-align: center;
  width: 80%;
  font-size: 8px;
  border-radius: 1250px;
  padding: 2px;
  border: gold solid 3px;
}
.seal {
  position: relative;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 100px;
  border: gold solid 10px;
  border-radius: 50%;
  font-size: 20px;
  background-color: black;
  mask: url(../assets/images/seal_mask.svg) no-repeat center;

  p {
      padding: 1px 15px;
      text-align: center;
      font-size: 6px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border: rgb(185, 158, 0) solid 2px;
    border-radius: 50%;
  }
}
</style>
