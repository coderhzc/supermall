<template>
  <div class="profile-information-div">
    <div>
      <img src="~assets/img/profileInformation/email.svg" alt="">
      <span class="email">我的消息</span>
    </div>
    <div>
      <img src="~assets/img/profileInformation/score.svg" alt="">
      <span class="score">积分商城</span>
    </div>
    <div>
      <img src="~assets/img/profileInformation/member.svg" alt="">
      <span class="member">会员卡</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileInformation"
}
</script>

<style scoped>
.profile-information-div{
  position: relative;
  padding: 20px;
  line-height: 35px;
  height: 150px;
  font-size: 16px;
  border-bottom: 15px solid rgba(194,194,194,.2);
}
.profile-information-div img{
  margin-right: 10px;
  width: 24px;
  height: 24px;
}
.email{
  position: absolute;
  top: 17px;
  left: 60px;
}
.score{
  position: absolute;
  top: 50px;
  left: 60px;
}
.member{
  position: absolute;
  left: 60px;
  top: 86px;
}
</style>
