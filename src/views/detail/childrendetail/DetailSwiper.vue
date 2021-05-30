<template>
<div >
  <swiper class="detail-images">
    <swiper-item v-for="(item,id) in DetailSwiperImage" :key="id">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/Swiper/index";
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    DetailSwiperImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-images{
  height: 300px;
}
.detail-images img{
}
</style>
