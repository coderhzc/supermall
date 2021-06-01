<template>
  <div class="ShopDetail">
    <div class="ShopLogo">
      <img :src="shop.shopLogo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="ShopData">
      <div class="ShopDataDiv1">
        <div class="ShopDataSpan1">
          <span>{{shop.sell | sellCountFilter}}</span>
          <span>{{shop.goods}}</span>
        </div>
        <div class="ShopDataSpan2">
          <span>总销售</span>
          <span>商品总数</span>
        </div>
      </div>
      <div class="ShopDataDiv2">
        <tr v-for="(item,index) in shop.score" class="ShopDataSpan3" :key="index">
          <td class="name">{{item.name}}</td>
          <td class="score" :class="{'score-more':item.isBetter}">{{item.score}}</td>
          <td class="score1" :class="{'score-more1':item.isBetter}">{{item.isBetter? '高':'低'}}</td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopDetail",
  data(){
    return{
    }
  },
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  filters:{
    sellCountFilter(value){
      let result = value;
      if(value>10000){
        result = (result/10000).toFixed(1)+'万'
      }
      return result
    }
  }
}
</script>

<style scoped>
.ShopDetail{
}
.ShopLogo{
  position: relative;
}
.ShopLogo img{
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin:20px 0px 0px 20px;
}
.ShopLogo span{
  position: absolute;
  margin-top: 35px;
  margin-left: 10px;
  font-size: 18px;
}
.ShopData{
  display: flex;
  height: 80px;
  text-align: center;
  border-bottom: 4px solid rgba(196, 194, 194, 0.3);
}
.ShopDataDiv1{
  height: 65px;
  border-right: 2px solid rgba(196, 194, 194, 0.4);
  padding-top: 10px;
  flex: 1;
}
.ShopDataDiv2{
  flex: 1;
}
.ShopDataSpan1{
  display: flex;
  font-size: 22px;
}
.ShopDataSpan2{
  display: flex;
  font-size: 14px;
}
.ShopDataSpan1 span {
  flex: 1;
  margin-left: 15px;
}
.ShopDataSpan2 span {
  flex: 1;
  margin-left: 15px;
}
.ShopDataSpan3{
  display: flex;
  font-size: 14px;
  line-height: 23px;
  padding-left: 10px;
}
.ShopDataSpan3 .name{
  flex: 1;
}
.evaluate-more span{
  background: #fc4c6e;
}
.evaluate span{
  background: #4eec54;
  color: #ffffff;
}
.score{
  color: #4eec54;
  flex: 1;
}
.score-more{
  color: #fc4c6e;
}
.score1{
  color: #ffffff;
  background-color: #4eec54;
  border-radius: 17px;
  width:20px;
  margin-right: 10px;
}
.score-more1{
  color: #ffffff;
  background-color: #ff5777;
}
</style>
