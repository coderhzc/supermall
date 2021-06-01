<template>
  <div class="shop-evaluate" v-if="Object.keys(evaluate).length !== 0">
    <div class="more-evaluate">
      <span>用户评价</span>
      <span>更多</span>
      </span>
    </div>
    <div class="user-param">
      <img :src="evaluate.user.avatar" alt="">
      <span>{{evaluate.user.uname}}</span>
    </div>
    <p class="shop-evaluate-p">{{evaluate.content}}</p>
    <div class="user-date">
      <span>{{evaluate.created | showDate}}</span>
      <span>{{evaluate.style}}</span>
    </div>
    <div class="goods-images" v-if="evaluate.images != 0">
      <div class="goods-images-div" v-for="item in evaluate.images">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'
export default {
  name: "ShopEvaluate",
  props:{
    evaluate:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.shop-evaluate{
  width: 90%;
  margin:5px auto;
  padding-bottom: 5px;
  border-bottom: 4px solid rgba(194,194,194,.3);
}
.more-evaluate{
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 15px;
  border-bottom: 2px solid rgba(196, 194, 194, 0.3);
}
.rate-data{
  font-size: 13px;
  color: rgba(194,194,194,0.9);
}
.user-param{
}
.user-param img {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin: 15px 0px 0px 15px;
}
.user-param span{
  position: absolute;
  margin: 25px 0px 0px 15px;
  font-size: 15px;
}
.shop-evaluate-p{
  margin-top: 7px;
  text-indent: 1em;
  font-size: 14px;
  line-height: 20px;
}
.user-date{
  margin:10px 10px;
  font-size: 12px;
}
.user-date span{
  margin-right: 10px;
  color: rgba(194, 194, 194, 0.9);
}
.goods-images{
  height: 120px;
  display: flex;
}
.goods-images img {
  width: 100px;
  height: 100px;
  margin-left: 5px;
  margin-top: 10px;
}
</style>
