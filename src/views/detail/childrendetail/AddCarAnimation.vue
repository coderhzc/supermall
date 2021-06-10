<template>
<div class="add-car-animation">
  <div class="add-car-animation-text">
    <span>已添加购物车</span>
  </div>
</div>
</template>

<script>
export default {
  name: "AddCarAnimation"
}
</script>

<style scoped>
.add-car-animation{
  text-align: center;
}
.add-car-animation-text{
  width: 25%;
  line-height: 40px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20%;
  z-index: 10;
  background-color: rgba(194,194,194,.9);
}
.add-car-animation-text span{
  color: rgba(17, 17, 17, 0.99);
}
</style>
