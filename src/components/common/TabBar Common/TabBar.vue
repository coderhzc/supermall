<template>
  <div class="tab-bal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tab-bal{
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgb(234, 233, 233);
  box-shadow: 0px -3px 4px rgba(130, 128, 128,0.2);
  z-index: 9;
}

</style>
