<template>
<div>
  <nav-bar>
    <nar-bar-item>
      <div slot="center" class="nav-bar">购物街</div>
    </nar-bar-item>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/NavBar Common/NavBar";
import NarBarItem from "@/components/common/NavBar Common/NavBarItem";
export default {
  name: "NavBarHome",
  components:{
    NavBar,
    NarBarItem
  }
}
</script>

<style scoped>
</style>
