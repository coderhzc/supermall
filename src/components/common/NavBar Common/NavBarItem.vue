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
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left,.right{
  width:60px;
}
.center{
  flex:1;
}
.narbaritem img{
  width: 30px;
  height: 30px;
  margin: 8px;
}
</style>
