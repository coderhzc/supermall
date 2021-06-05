<template>
  <div class="car-goods">
    <div v-for="(item,id) in $store.state.AddShopCar" :key="id" class="car-goods-div">
      <div class="select-icon" @click="item.isselect = !item.isselect">
        <img v-if="item.isselect" src="~assets/img/shopcar/select_active.svg" alt="">
        <img v-else src="~assets/img/shopcar/select.svg" alt="">
      </div>
      <div class="goods-images">
        <img :src="item.images" alt="">
      </div>
      <div class="goods-detail">
         <div class="goods-title">
           <p>{{item.title}}</p>
         </div>
        <div class="goods-price">
          <p class="goods-price-icon">{{item.realprice}}</p>
        </div>
        <div class="goods-count">
          <p>数量:x{{item.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CarGoods",
  components:{
  }
}
</script>

<style scoped>
.goods-detail{
  position: relative;
}
.car-goods-div{
  border-bottom: 2px solid rgba(194,194,194,.5);
  height: 125px;
  padding-top:10px;
  padding-bottom: 10px;
  display: flex;
}
.goods-images img{
  width: 85px;
  height: 100%;
  border-radius: 10%;
  margin-right:10px;
}
.goods-title{
  margin-top: 10px;
  width: 35%;
}
.goods-title p{
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.goods-price{
  position: relative;
  margin-top: 40px;
  margin-left: 15px;
  font-size: 19px;
  color: #ff5777;
}
.goods-price .goods-price-icon::before{
  content: '';
  position:absolute;
  left: -17px;
  top:2px;
  width: 17px;
  height: 17px;
  background: url("~assets/img/goodslist/price.svg") 0px 0px / 17px 17px;
}
.goods-count{
  position: absolute;
  left: 150px;
}
.select-icon{
 margin: 30px 5px 0px 10px ;
}
.select-icon img {
  width: 30px;
}
</style>
