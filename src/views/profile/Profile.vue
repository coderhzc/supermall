<template>
  <div>
    <profile-top-bar class="top-bar"/>
    <profile-user-image/>
    <profile-wallet/>
    <profile-information/>
  </div>
</template>

<script>
import ProfileTopBar from "@/views/profile/childrenProfile/ProfileTopBar";
import ProfileUserImage from "@/views/profile/childrenProfile/ProfileUserImage";
import ProfileWallet from "@/views/profile/childrenProfile/ProfileWallet";
import ProfileInformation from "@/views/profile/childrenProfile/ProfileInformation";
export default {
  name: "Profile",
  components:{
    ProfileTopBar,
    ProfileUserImage,
    ProfileWallet,
    ProfileInformation,
  }
}
</script>

<style scoped>
.top-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
