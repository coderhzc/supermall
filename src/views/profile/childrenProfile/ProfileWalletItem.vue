<template>
  <div class="profile-wallet-item" >
    <div style="flex: 1;">
      <span class="wallet-score">0.00</span><span>元</span>
      <p>我的余额</p>
    </div>
    <div style="flex: 1;">
      <span class="wallet-score">0</span><span>个</span>
      <p>我的优惠</p>
    </div>
    <div style="flex: 1;">
      <span class="wallet-score">0</span><span>分</span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProfileWalletItem"
}
</script>

<style scoped>
.profile-wallet-item{
  display: flex;
  padding-top: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 15px;
}
.wallet-score{
  font-size: 25px;
  margin-right: 5px;
  color: rgb(241, 75, 32);
}
</style>
