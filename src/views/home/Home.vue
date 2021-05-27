<template>
  <div>
<!--顶部导航栏/滚动横幅/推荐栏/周末推荐/主页类别选择/商品展示/返回顶部-->
    <nav-bar-home class="navbar"/>

    <scroll class="content" ref="scroll">
    <swiper-home :banners="banners"/>
    <recommend-home :recommends="recommends"/>
    <week-recommend/>
    <home-bar class="hombar" :title="title=['流行','新款','精选']" @topClick="topClick"/>
    <home-goods :home-goods="showGoods" />
    </scroll>
    <back-top class="backtop" @click.native="getBackTop"/>
  </div>
</template>

<script>
//公共业务组件
import NavBarHome from "@/views/home/childrenhome/home navbar/NavBarHome";
import HomeBar from "@/components/content/Home Bar/HomeBar";
import Scroll from "@/components/common/main Scorll/Scroll";
//业务组件
import RecommendHome from "@/views/home/childrenhome/home recommend/RecommendHome";
import WeekRecommend from "@/views/home/childrenhome/home recommend/WeekRecommend";
import HomeGoods from "@/views/home/childrenhome/Home Goods /HomeGoods";
import BackTop from "@/components/content/Back Top/BackTop";

//三方导入
import SwiperHome from "@/views/home/childrenhome/home swiper/SwiperHome";

//网络请求
import {getHomeMultidata,getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  components:{
    HomeBar,
    NavBarHome,
    Scroll,

    RecommendHome,
    WeekRecommend,
    HomeGoods,
    BackTop,

    SwiperHome,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop'
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed:{
    showGoods(){        //通过currentType来选择展示商品
     return this.goods[this.currentType].list
    }
  },
  methods:{
    getBackTop(){       //通过scrollTo 返回顶部
      this.$refs.scroll.scrollTo(0,0);
    },
    topClick(index){        //获取选择对象
      switch (index){
        case 0:{
          this.currentType='pop'
          break
        }
        case 1:{
          this.currentType='new'
          break
        }
        case 2:{
          this.currentType='sell'
          break
        }
      }
    },
    getHomeMultidata(){       //获取滚动横幅和推荐的网络请求数据
      getHomeMultidata().then(res=>{
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){       //获取主页类别的数据
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        console.log(res);
      })
    },
  }
}
</script>

<style scoped>
.navbar{
  top: 0;
  position: sticky;
  z-index: 9;
}
.hombar{
  top: 44px;
  position: sticky;
  z-index: 9;
}
.content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
.backtop{
  position: fixed;
  right: 10px;
  bottom: 60px;

  background: #ffffff;
  border-radius: 20px;
  width: 45px;
  height: 40px;
}
</style>
