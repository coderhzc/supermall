<template>
  <div>
    <nav-bar-home/>
    <swiper-home :banners="banners"/>
    <recommend-home :recommends="recommends"/>
  </div>
</template>

<script>
import NavBarHome from "@/views/home/childrenhome/home navbar/NavBarHome";
import RecommendHome from "@/views/home/childrenhome/home recommend/RecommendHome";

import SwiperHome from "@/views/home/childrenhome/home swiper/SwiperHome";

import {getHomeMultidata} from "@/network/home";
export default {
  name: "Home",
  components:{
    NavBarHome,
    SwiperHome,
    RecommendHome,
  },
  data(){
    return{
      banners:[],
      recommends:[],
    }
  },
  created() {
    this.getHomeMultidata()
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
}
</script>

<style scoped>

</style>
