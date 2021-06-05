<template>
  <div class="profile-user">
    <div class="profile-user-image">
      <img src="~assets/img/userimage/userimage.svg" class="image-user">
      <span class="user-sign">登录/注册</span>
        <img src="~assets/img/userimage/selectphone.svg" class="image-phone">
      <span class="select-phone">暂未绑定手机</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUserImage"
}
</script>

<style scoped>
.profile-user{
  width: 100%;
  height: 100px;
  background-color: var(--color-tint);
}
.profile-user-image{
  position: relative;
  height: 100%;
}
.image-user {
  margin-top:30px;
  margin-left: 20px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #e0e0e0;
}
.user-sign {
  font-size: 18px;
  position: absolute;
  top: 40px;
  left: 90px;
  font-weight: bold;
  color: #fff;
}
.image-phone{
  position: absolute;
  left: 85px;
  top: 62px;
  width: 20px;
  height: 20px;
}
.select-phone{
  position: absolute;
  top: 65px;
  left: 105px;
  color: #fff;
}
</style>
