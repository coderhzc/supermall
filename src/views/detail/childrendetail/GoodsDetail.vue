<template>
<div class="GoodsDetail">
  <div class="GoodsTitle">
    <p>{{goods.title}}</p>
  </div>
  <div class="GoodsPrice">
    <span class="GoodsDetailNewPrice">{{goods.newPrice}}</span>
    <span class="GoodeDetailOldPrice">{{goods.oldPrice}}</span>
    <span v-if="goods.discount" class="GoodsDetailDiscount">{{goods.discount}}</span>
  </div>
  <div class="GoodsColumns">
    <div v-for="item in goods.columns">
      <span>{{item}}</span>
    </div>
  </div>
  <div class="GoodsServices">
    <div v-for="item in goods.services" class="GoodsServicesDiv">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GoodsDetail",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
  }
}
</script>

<style scoped>

.GoodsTitle{
  margin:12px auto;
  width: 350px;
}
.GoodsTitle p{
  font-size: 18px;
  text-indent: 0.4em;
}
.GoodsPrice{
  width: 350px;
  margin:20px auto;
}
.GoodsDetailNewPrice{
  font-size: 28px;
  color: var(--color-tint);
}
.GoodeDetailOldPrice{
  text-decoration: line-through;
  color: #afaeae;
  margin-left: 8px;
}
.GoodsDetailDiscount{
  margin-left: 9px;
  padding: 7px;

  font-size: 13px;
  border-radius: 30px;

  background-color: #ff5777;
  color: #ffffff;
}

.GoodsColumns{
  margin:20px auto;
  display: flex;
  padding:0px 10px 8px 10px;
  justify-content: space-between;

  border-bottom: 2px solid rgba(196, 194, 194, 0.3);
}
.GoodsColumns span{
  font-size: 14px;
  color: #9c9a9a;
}
.GoodsServices{
  display: flex;
  justify-content: space-between;
  padding: 5px 3px 25px 5px;
  border-bottom: 4px solid rgba(196, 194, 194, 0.3);
}
.GoodsServicesDiv{
  font-size: 12px;
}
.GoodsServices img {
  width: 15px;
  position: relative;
  top: 3px;
  right: 3px;
}
</style>
