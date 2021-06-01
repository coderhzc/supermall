<template>
  <div>
    <div class="shop-parameter1">
      <table class="shop-parameter1-table" v-for="(item,index) in parameter.tables" :key="index">
        <tr v-for="(tr,indey) in item" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
        </tr>
      </table>
    </div>
    <div>
      <table class="shop-parameter2">
        <tr v-for="(item,id) in parameter.set" :key="id">
          <td>{{item.key}}</td>
          <td class="td-color">{{item.value}}</td>
        </tr>
      </table>
    </div>
</div>
</template>

<script>
export default {
  name: "ShopParameter",
  props:{
    parameter:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
.shop-parameter1{
  width: 90%;
  margin:20px auto;
}
.shop-parameter1-table{
  line-height: 44px;
  display: flex;
  border-bottom: 2px solid rgba(196, 194, 194, 0.3);
}
.shop-parameter1 tr{
  border-collapse: collapse;
  flex:1;
}
.shop-parameter1 td{
}
.shop-parameter2{
  width: 90%;
  margin: 20px auto;
}
.shop-parameter2 tr{
  font-size: 12px;
  line-height: 30px;
  text-align: center;
}
.shop-parameter2 td{
  border-bottom: 2px solid rgba(196, 194, 194, 0.3);
}
.td-color{
  color: var(--color-tint);
}
</style>
