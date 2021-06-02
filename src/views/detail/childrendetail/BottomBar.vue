<template>
<div class="bottom-bar">
  <tab-bar>
    <tab-bar-item>
      <img src="~assets/img/bottombar/service.svg" alt="" slot="item-icon">
      <p slot="item-text">客服</p>
    </tab-bar-item>
    <tab-bar-item>
      <img src="~assets/img/bottombar/shop.svg" alt="" slot="item-icon">
      <p slot="item-text">店铺</p>
    </tab-bar-item>
    <tab-bar-item>
      <img src="~assets/img//bottombar/collection.svg" alt="" slot="item-icon">
      <p slot="item-text">收藏</p>
    </tab-bar-item>
    <div class="add-car" @click="AddCarClick">
      <span>加入购物车</span>
    </div>
    <div class="buy">
      <span>购买</span>
    </div>
  </tab-bar>
</div>
</template>

<script>
import TabBar from "@/components/common/TabBar Common/TabBar";
import TabBarItem from "@/components/common/TabBar Common/TabBarItem";
export default {
  name: "BottomBar",
  components:{
    TabBar,
    TabBarItem,
  },
  methods:{
    AddCarClick(){
      this.$emit('AddCarClick',)
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  z-index: 10;
  position: fixed;
  background-color:#fff;
  left: 0;
  right: 0;
  bottom: 0;
}
.add-car{
  width: 24%;
  background-color: rgb(248, 199, 88);
  text-align: center;
  line-height: 48px;
  color: #fff;
}
.buy{
  width: 24%;
  background-color: var(--color-tint);
  text-align: center;
  line-height: 48px;
  color: #fff;
}
</style>
