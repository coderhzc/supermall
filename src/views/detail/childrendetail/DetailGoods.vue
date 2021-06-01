<template>
<div class="goods">
  <detail-goods-list v-for="(item,id) in detailgoods.list" :goods-list="item" :key="id" class="goods-div"></detail-goods-list>
</div>
</template>

<script>
import DetailGoodsList from "@/views/detail/childrendetail/DetailGoodsList";
export default {
  name: "DetailGoods",
  components:{
   DetailGoodsList
  },
  props:{
    detailgoods:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.goods{
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin:20px auto;
}
.goods-div{
  width: 48%;
}
</style>
