<template>
  <div>
    <top-bar-detail class="top-bar" @topbarindex="topbarindex" ref="topbar"/>
    <add-car-animation v-show="isAnimation"/>
    <scroll class="content" :ispullUpLoad="true" @scroll="contentBackTop" ref="scroll">
      <detail-swiper :detail-swiper-image="topImages"/>
      <goods-detail :goods="goods"/>
      <shop-detail :shop="shop"/>
      <shop-evaluate :evaluate="evaluate" ref="evaluate"/>
      <shop-parameter :parameter="parameter" ref="parameter"/>
      <detail-image :detailimage="detailimage"/>
      <detail-goods :detailgoods="detailgoods" class="detail-goods" ref="detailgoods"/>
    </scroll>
    <back-top class="back-top" @click.native="backtop" v-show="isBackTop" />
    <bottom-bar @AddCarClick="AddCarClick"/>
  </div>
</template>

<script>
import DetailSwiper from "@/views/detail/childrendetail/DetailSwiper";
import TopBarDetail from "@/views/detail/childrendetail/TopBarDetail";
import GoodsDetail from "@/views/detail/childrendetail/GoodsDetail";
import ShopDetail from "@/views/detail/childrendetail/ShopDetail";
import ShopParameter from "@/views/detail/childrendetail/ShopParameter";
import ShopEvaluate from "@/views/detail/childrendetail/ShopEvaluate";
import DetailImage from "@/views/detail/childrendetail/DetailImage";
import DetailGoods from "@/views/detail/childrendetail/DetailGoods";
import BottomBar from "@/views/detail/childrendetail/BottomBar";
import BackTop from "@/components/content/Back Top/BackTop";
import AddCarAnimation from "@/views/detail/childrendetail/AddCarAnimation";

import Scroll from "@/components/common/main Scorll/Scroll";

import {getDetail, Goods, Parameter, Shop,getRecommend} from "@/network/detail.js"
export default {
  name: "Detail",
  components: {
    TopBarDetail,
    DetailSwiper,
    GoodsDetail,
    ShopDetail,
    ShopParameter,
    ShopEvaluate,
    DetailImage,
    DetailGoods,
    BackTop,
    BottomBar,
    AddCarAnimation,

    Scroll
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods:{},
      shop:{},
      parameter:{},
      evaluate:{},
      detailimage:{},
      detailgoods:{},
      isBackTop:false,
      saveY:[],
      isAnimation:false,
    }
  },
  created() {
    this.iid = this.$route.params.iid;

    getRecommend().then(res => {
      this.detailgoods = res.data.data
    })

    getDetail(this.iid).then(res => {
      const data = res.data.result
      this.topImages = data.itemInfo.topImages //轮播图
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)//商品信息
      this.shop = new Shop(data.shopInfo)//商家信息
      this.parameter = new Parameter(data.itemParams) // 商品详细信息
      if (data.rate.cRate !== 0){ //评价
        this.evaluate = data.rate.list[0]
      }
      this.detailimage = data.detailInfo.detailImage[0] //商品展示
    })
  },

  updated() {
      this.saveY = []
      this.saveY.push(0)
      this.saveY.push(this.$refs.evaluate.$el.offsetTop * -1)
      this.saveY.push(this.$refs.parameter.$el.offsetTop * -1)
      this.saveY.push(this.$refs.detailgoods.$el.offsetTop * -1 )
  },

  methods: {
    backtop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    contentBackTop(position){
      this.isBackTop = (-position.y) > 1000
    },
    topbarindex(index){
      this.$refs.scroll.scrollTo(0,this.saveY[index],300)
    },
    AddCarClick(){
      const product = {}
      product.images = this.topImages[0]
      product.title = this.goods.title
      product.realprice = this.goods.realPrice
      product.iid = this.iid

      this.$store.commit('ShopCart',product)
      console.log(this.$store.state.AddShopCar);

      this.isAnimation = true
      new Promise(resolve => {
        setTimeout(()=>{
          resolve()
        },1500)
      }).then(() => {
        return this.isAnimation =false
      })
    },
  }
}
</script>

<style scoped>
.content {
  overflow: hidden;
  position: absolute;
  top: 50px;
  bottom: 49px;
}
.top-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background: #ffffff;
}
.back-top{
  position: fixed;
  right: 10px;
  bottom: 65px;

  background: #ffffff;
  border: 1px solid rgba(194,194,194,.2);
  width: 50px;
  height: 40px;
  border-radius: 10px;
}
.back-top::before{
  content: '返回';
  position: relative;
  top:17px;
  font-size: 13px;
  left: 12px;
}
</style>
