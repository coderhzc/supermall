<template>
<div>
  <nav-bar>
    <nar-bar-item>
      <div slot="center">购物街</div>
    </nar-bar-item>
  </nav-bar>
</div>
</template>

<script>
import NavBar from "@/components/common/NavBar Common/NavBar";
import NarBarItem from "@/components/common/NavBar Common/NarBarItem";
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
