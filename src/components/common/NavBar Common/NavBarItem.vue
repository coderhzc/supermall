<template>
<div class="narbaritem">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NarBarItem"
}
</script>

<style scoped>
.narbaritem{
  display: flex;
  line-height: 44px;
  height: 44px;
  text-align: center;
}
.left,.right{
  width:60px;
}
.center{
  flex:1;
}
</style>
