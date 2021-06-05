<template>
<div class="car-calculation">
  <div class="car-calculation-div">
    <div class="calculation-select" @click="getAllSelect">
      <img v-if="select" src="~assets/img/shopcar/select.svg" alt="">
      <img v-else src="~assets/img/shopcar/select_active.svg" alt="">
      <span>全选</span>
    </div>
    <div class="car-calculation-Sum">
      <span>合计:{{getSum}}</span>
    </div>
    <div class="calculation-count">
      <span>去结算({{getCount}})</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CarCalculation",
  data(){
    return{
    }
  },
  computed:{
    getSum(){
      return this.$store.state.AddShopCar.filter(item => {
        return item.isselect
      }).reduce((preValue,item) => {
       return preValue + item.realprice * item.count
      },0).toFixed(2)
    },
    getCount(){
      return this.$store.state.AddShopCar.filter(item => item.isselect).length
    },
    select(){
      return this.$store.state.AddShopCar.find(item =>!item.isselect)
    }
  },
  methods:{
    getAllSelect() {
      this.$emit('getAllSelect')
    }
  }
}
</script>

<style scoped>
.car-calculation{
  background-color: rgba(210, 208, 208, 0.5);
  width: 100%;
  height: 45px;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
}
.car-calculation-div{
  display: flex;
}
.calculation-select img{
  width: 25px;
  margin-top: 8px;
  margin-left: 10px;
}
.calculation-select span{
  position: absolute;
  top: 12px;
  left: 40px;
}
.car-calculation-Sum{
  margin: 12px 0px 0px 50px;
}
.calculation-count{
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 0px;
  width: 100px;
  background-color: var(--color-tint);
  color: #fff;
  line-height: 50px;
  text-align: center;
}
</style>
