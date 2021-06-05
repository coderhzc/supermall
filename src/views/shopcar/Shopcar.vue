<template>
  <div>
    <car-top-bar class="car-top-bar"/>
    <scroll class="content" :ispull-up-load="true" :is-back-top="3" ref="scroll">
      <car-goods/>
    </scroll>
    <car-calculation @getAllSelect="getAllSelect()"/>
  </div>
</template>

<script>
import CarTopBar from "@/views/shopcar/childrenshopcar/CarTopBar";
import CarGoods from "@/views/shopcar/childrenshopcar/CarGoods";
import CarCalculation from "@/views/shopcar/childrenshopcar/CarCalculation";

import Scroll from "@/components/common/main Scorll/Scroll";
export default {
  name: "Shopcar",
  components:{
    CarTopBar,
    CarGoods,
    CarCalculation,

    Scroll,
  },
  activated() {
   this.$refs.scroll.getRefresh()
  },
  methods:{
    getAllSelect(){
      if(this.$store.state.AddShopCar.find(item => item.isselect)){
        this.$store.state.AddShopCar.forEach(item =>{
          item.isselect = false
        })
      }else{
        this.$store.state.AddShopCar.forEach(item => item.isselect = true)
      }
    }
  }
}
</script>

<style scoped>
.content{
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 95px;
  left: 0;
  right: 0;
}
.car-top-bar{
  background: var(--color-tint);
  color: #fff;
}
</style>
