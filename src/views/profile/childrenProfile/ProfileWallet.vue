<template>
  <div class="profile-wallet">
    <profile-wallet-item/>
  </div>
</template>

<script>
import ProfileWalletItem from "@/views/profile/childrenProfile/ProfileWalletItem";
export default {
  name: "ProfileWallet",
  components:{
    ProfileWalletItem
  }
}
</script>

<style scoped>
.profile-wallet{
  height: 115px;
  border-bottom: 15px solid rgba(194,194,194,.2);
}
</style>
