<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendHome",
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  text-align: center;
  display: flex;
}
.recommenditem{
  margin: 13px;
  flex:1;
}
.recommenditem img{
  width: 60px;
  height: 60px;

}
</style>
