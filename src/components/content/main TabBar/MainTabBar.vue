<template>
  <div>
    <router-view/>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcar">
        <img slot="item-icon" src="~assets/img/shopcar.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/shopcar_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-icon" src="~assets/img/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/profile_active.svg" alt="">
        <div slot="item-text">个人中心</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/TabBar Common/TabBar";
import TabBarItem from "@/components/common/TabBar Common/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
    TabBar,TabBarItem
  }
}
</script>

<style scoped>
</style>
