<template>
  <div>
<!--顶部导航栏/滚动横幅/推荐栏/周末推荐/主页类别选择/商品展示/返回顶部-->
    <nav-bar-home class="navbar"/>

    <home-bar class="hombar" :title="title=['流行','新款','精选']"
              @topClick="topClick" v-show="disappearHomeBar" ref="topControlRef2"/>

    <scroll class="content"
            ref="scroll"
            @scroll="contentBackTop"
            :is-back-top="3"
            @pullingUp="loadMore"
            :ispull-up-load="true">
    <swiper-home :banners="banners"/>
    <recommend-home :recommends="recommends"/>
    <week-recommend/>
    <home-bar class="hombar" :title="title=['流行','新款','精选']"
              @topClick="topClick"
              ref="topControlRef1"/>
    <home-goods :home-goods="showGoods" />
    </scroll>
    <back-top class="backtop" @click.native="getBackTop" v-show="isBackTop"/>
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
      currentType:'pop',
      isBackTop:false,
      disappearHomeBar:false,
      saveY:0,
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.getRefresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
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
    contentBackTop(position){       //通过位置决定是否显示返回顶部
      this.isBackTop = (-position.y) > 1000;

      this.disappearHomeBar = (-position.y) > this.$refs.topControlRef1.$el.offsetTop
    },
    loadMore(){          //获取更多商品展示
      this.getHomeGoods(this.currentType)
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
      this.$refs.topControlRef1.currentIndex = index
      this.$refs.topControlRef2.currentIndex= index
    },
    getHomeMultidata(){       //获取滚动横幅和推荐的网络请求数据
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
    getHomeGoods(type){       //获取主页类别的数据
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp();

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
  background: var(--color-tint);
  color: #ffffff;
}
.hombar{
 position: relative;
  z-index: 9;
}
.backtop{
  position: fixed;
  right: 10px;
  bottom: 65px;

  background: #ffffff;
  width: 50px;
  height: 40px;
  border-radius: 10px;
}
.backtop::before{
  content: '返回';
  position: relative;
  top:20px;
  font-size: 13px;
  left: 12px;
}
.content {
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>
