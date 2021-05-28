<template>
  <swiper>
    <swiper-item v-for="(item,id) in banners" :key="id">
      <a :href="item.link"></a>
      <img :src="item.image" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/Swiper/index";
export default {
  name: "SwiperHome",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banners:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      isLoad:false,
    }
  },
}
</script>

<style scoped>

</style>
