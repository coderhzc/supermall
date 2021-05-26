<template>        <!--主页类别组件-->
  <div class="home-bar">
    <div v-for="(item,index) in title" class="home-bar-item" @click="itemclick(index)"
    :class="{active:currentIndex === index}"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBar",
  props:{
    title:{
      type:Array,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemclick(index){       //同步currentIndex，向父组件传输新的index
      this.currentIndex = index;
      this.$emit('topClick',index)
    }
  }
}
</script>

<style scoped>
.home-bar{
  display: flex;
  text-align: center;
  background: #ffffff;
}
.home-bar-item{
  flex: 1;
  margin: 9px;
  font-size: 18px;
}
.active span {
  padding-bottom: 5px;
  border-bottom:3px solid var(--color-tint);
}

</style>
