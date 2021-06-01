<template>
<div class="goods">
  <home-goods-list v-for="(item,id) in HomeGoods" :goods-list="item" :key="id"></home-goods-list>
</div>
</template>

<script>
import HomeGoodsList from "@/views/home/childrenhome/Home Goods /HomeGoodsList";
export default {
  name: "HomeGoods",
  components:{
    HomeGoodsList
  },
  props:{
    HomeGoods:{
      type:Array,
      default(){
        return[]
      }
    },
  }
}
</script>

<style scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
