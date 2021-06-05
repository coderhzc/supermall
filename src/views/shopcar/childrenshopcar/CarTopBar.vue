<template>
  <div>
    <nav-bar>
      <nav-bar-item>
        <span slot="center">购物车({{$store.state.AddShopCar.length}})</span>
      </nav-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar Common/NavBar";
import NavBarItem from "@/components/common/NavBar Common/NavBarItem";
export default {
  name: "CarTopBar",
  components:{
    NavBar,
    NavBarItem
  }
}
</script>

<style scoped>

</style>
