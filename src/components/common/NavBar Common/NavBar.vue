<template>
<div class="navbar">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar{

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  position:relative; /*像position:relative;页面滚动超出区域，就会像position:fixed，固定在目标位置*/
  box-shadow: 0px 1px 2px #e0e0e0;
}

</style>
