<template>
  <div>
    <top-bar-detail class="top-bar"/>
    <detail-swiper :detail-swiper-image="topImages"/>
    <goods-detail :goods="goods"/>
    <shop-detail :shop="shop"/>
    <ul>
      <li>1111</li>
      <li>1112</li>
      <li>1113</li>
      <li>1114</li>
      <li>1115</li>
      <li>1116</li>
      <li>1117</li>
      <li>1118</li>
      <li>1119</li>
      <li>11110</li>
      <li>11111</li>
      <li>11112</li>
      <li>11113</li>
      <li>11114</li>
      <li>11115</li>
      <li>11116</li>
      <li>11117</li>
      <li>11118</li>
      <li>11119</li>
      <li>11120</li>
      <li>11121</li>
      <li>11122</li>
      <li>11123</li>
      <li>11124</li>
      <li>11125</li>
      <li>11126</li>
      <li>11127</li>
      <li>11128</li>
      <li>11129</li>
      <li>11130</li>
    </ul>
  </div>
</template>

<script>
import DetailSwiper from "@/views/detail/childrendetail/DetailSwiper";
import TopBarDetail from "@/views/detail/childrendetail/TopBarDetail";
import GoodsDetail from "@/views/detail/childrendetail/GoodsDetail";
import ShopDetail from "@/views/detail/childrendetail/ShopDetail";


import {getDetail,Goods,Shop} from "@/network/detail.js"
export default {
  name: "Detail",
  components: {
    TopBarDetail,
    DetailSwiper,
    GoodsDetail,
    ShopDetail,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods:{},
      shop:{},
    }
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      const data = res.data.result
      this.topImages = data.itemInfo.topImages //轮播图
      console.log(res);
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.top-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #ffffff;
}
</style>
