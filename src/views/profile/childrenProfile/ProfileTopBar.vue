<template>
  <div>
    <nav-bar>
      <nav-bar-item>
        <span slot="center">我的档案</span>
      </nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBarItem from "@/components/common/NavBar Common/NavBarItem";
import NavBar from "@/components/common/NavBar Common/NavBar";
export default {
  name: "ProfileTopBar",
  components:{
    NavBarItem,
    NavBar,
  }
}
</script>

<style scoped>

</style>
