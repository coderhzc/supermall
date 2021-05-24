<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="stylecolor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return{
      // isActive: false,
    }
  },
  props:{
    path:{
      type:String
    },
    activecolor:{
      type:String,
      default:'red',
    }
  },
  methods:{
    itemClick(){
      return this.$router.push(this.path);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    stylecolor(){
      return this.isActive? {color:this.activecolor}:{}
    }
  },

}
</script>

<style scoped>
.tab-bar-item{
  flex:1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>
