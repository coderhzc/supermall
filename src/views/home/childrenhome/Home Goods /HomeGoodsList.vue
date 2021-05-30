<template>
  <div class="HomeGoodsList" @click="GoodsDetail">
    <img :src="GoodsList.show.img" alt="">
    <div class="GoodsTitle">
      <p>{{GoodsList.title}}</p>
      <span class="price">{{GoodsList.price}}</span>
      <span class="collect">{{GoodsList.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeGoodsList",
  props: {
    GoodsList: {
      type: Object,
      default() {
        return []
      }
    }
  },
  methods: {
    GoodsDetail() {
      this.$router.push('/detail/' + this.GoodsList.iid)
    }
  }
}
</script>

<style scoped>
.HomeGoodsList{
  width: 48%;
}
.HomeGoodsList img{
  width: 100%;
  border-radius: 5px  ;
}
.GoodsTitle{
  text-align: center;
  height: 50px;
  overflow: hidden;
  padding:3px 5px 3px 10px;
}
.GoodsTitle p{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 3px;
}
.GoodsTitle .price{
  color: var(--color-high-text);
  position: relative;
  margin-right: 10px;
}
.GoodsTitle .price::before{
  content: '';
  position: absolute;
  left: -14px;
  top: 3px;
  width: 13px;
  height: 13px;
  background: url("~assets/img/goodslist/price.svg") 0 0/13px 13px;
}
.GoodsTitle .collect{
  position: relative;
  margin-left: 13px;
}
.GoodsTitle .collect::before{
  content: '';
  position: absolute;
  left: -17px;
  top: 0px;
  width: 17px;
  height: 17px;

  background:url("~assets/img/goodslist/addshopcar.svg") 0 0/17px 17px;
}
</style>
