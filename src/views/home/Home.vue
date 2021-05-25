<template>
  <div>
<!--顶部导航栏/滚动横幅/推荐栏/周末推荐/主页类别选择-->
    <nav-bar-home/>
    <swiper-home :banners="banners"/>
    <recommend-home :recommends="recommends"/>
    <week-recommend></week-recommend>
    <home-bar :title="title=['热门','新款','精选']" @topClick="topClick"/>

    <ul>
      <li>1商品</li>
      <li>2商品</li>
      <li>3商品</li>
      <li>4商品</li>
      <li>5商品</li>
      <li>6商品</li>
      <li>7商品</li>
      <li>8商品</li>
      <li>9商品</li>
      <li>10商品</li>
      <li>11商品</li>
      <li>12商品</li>
      <li>13商品</li>
      <li>14商品</li>
      <li>15商品</li>
      <li>16商品</li>
      <li>17商品</li>
      <li>18商品</li>
      <li>19商品</li>
      <li>20商品</li>
      <li>21商品</li>
      <li>22商品</li>
      <li>23商品</li>
      <li>24商品</li>
      <li>25商品</li>
      <li>26商品</li>
      <li>27商品</li>
      <li>28商品</li>
      <li>29商品</li>
      <li>30商品</li>
      <li>31商品</li>
      <li>32商品</li>
      <li>33商品</li>
      <li>34商品</li>
      <li>35商品</li>
      <li>36商品</li>
      <li>37商品</li>
      <li>38商品</li>
      <li>39商品</li>
      <li>40商品</li>
      <li>41商品</li>
      <li>42商品</li>
      <li>43商品</li>
      <li>44商品</li>
      <li>45商品</li>
      <li>46商品</li>
      <li>47商品</li>
      <li>48商品</li>
      <li>49商品</li>
      <li>50商品</li>
      <li>51商品</li>
      <li>52商品</li>
      <li>53商品</li>
      <li>54商品</li>
      <li>55商品</li>
      <li>56商品</li>
      <li>57商品</li>
      <li>58商品</li>
      <li>59商品</li>
      <li>60商品</li>
      <li>61商品</li>
      <li>62商品</li>
      <li>63商品</li>
      <li>64商品</li>
      <li>65商品</li>
      <li>66商品</li>
      <li>67商品</li>
      <li>68商品</li>
      <li>69商品</li>
      <li>70商品</li>
      <li>71商品</li>
      <li>72商品</li>
      <li>73商品</li>
      <li>74商品</li>
      <li>75商品</li>
      <li>76商品</li>
      <li>77商品</li>
      <li>78商品</li>
      <li>79商品</li>
      <li>80商品</li>
      <li>81商品</li>
      <li>82商品</li>
      <li>83商品</li>
      <li>84商品</li>
      <li>85商品</li>
      <li>86商品</li>
      <li>87商品</li>
      <li>88商品</li>
      <li>89商品</li>
      <li>90商品</li>
      <li>91商品</li>
      <li>92商品</li>
      <li>93商品</li>
      <li>94商品</li>
      <li>95商品</li>
      <li>96商品</li>
      <li>97商品</li>
      <li>98商品</li>
      <li>99商品</li>
      <li>100商品</li>
    </ul>
  </div>
</template>

<script>
//业务组件
import NavBarHome from "@/views/home/childrenhome/home navbar/NavBarHome";
import RecommendHome from "@/views/home/childrenhome/home recommend/RecommendHome";
import WeekRecommend from "@/views/home/childrenhome/home recommend/WeekRecommend";
import HomeBar from "@/components/content/Home Bar/HomeBar";

//三方导入
import SwiperHome from "@/views/home/childrenhome/home swiper/SwiperHome";

//网络请求
import {getHomeMultidata,getHomeGoods} from "@/network/home";

export default {
  name: "Home",
  components:{
    NavBarHome,
    RecommendHome,
    WeekRecommend,
    HomeBar,

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
  methods:{
    topClick(index){        //通过switch选择type
      switch (index){
        case 0 :{
          this.currentType = 'pop';
          break;
          }
        case 1 :{
          this.currentType = 'new';
          break;
        }
        case 2 :{
          this.currentType = 'sell';
          break;
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
        console.log(type);
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>

</style>
