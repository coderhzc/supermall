<template>
  <div id="app">
    <main-tab-bar></main-tab-bar> <!--因为MainTabBar是控制所有映射的组件所以放在APP,谨记 -->
  </div>
</template>

<script>git
import MainTabBar from "@/components/content/main TabBar/MainTabBar";
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
