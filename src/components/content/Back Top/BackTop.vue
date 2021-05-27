<template>        <!--返回顶部-->
  <div class="backtop">
    <img src="~assets/img/backtop/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style scoped>
.backtop{
  position: fixed;
  right: 10px;
  bottom: 60px;

  background: #ffffff;
  border-radius: 20px;
  width: 45px;
  height: 40px;
}
.backtop img{
  width: 50px;
  height: 70px;
  position: absolute;
  left: -2px;
  bottom: -13px;
}
</style>
