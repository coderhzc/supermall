<template>
  <div class="tab-bal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBal"
}
</script>

<style scoped>
.tab-bal{
  display: flex;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: rgba(227, 226, 226, 0.57);
  box-shadow: 0px -4px 4px rgba(130, 128, 128,0.3);
}

</style>
