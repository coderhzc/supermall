<template>
  <div>
    <nav-bar>
      <nar-bar-item class="HeightBar">
        <div slot="left" class="leftSlot">
          <img src="~assets/img/back/back.svg" alt="" @click="DetailBack">
        </div>
        <div slot="center" class="centerSlot">
          <span v-for="(item,index) in MessageDetail" class="DetailMessageItem"
                @click="TopBarClick(index)" :class="{active:index === currentIndex}">{{item}}</span>
        </div>
      </nar-bar-item>
    </nav-bar>
  </div>
</template>

<script>
import NarBarItem from "@/components/common/NavBar Common/NavBarItem";
import NavBar from "@/components/common/NavBar Common/NavBar";
export default {
  name: "TopBarDetail",
  components:{
    NavBar,
    NarBarItem
  },
  data(){
    return{
      MessageDetail:['商品','参数','评论','推荐'],
      currentIndex:0,
    }
  },
  methods:{
    TopBarClick(index){
      this.currentIndex = index
    },
    DetailBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.centerSlot{
  display: flex;
}
.DetailMessageItem{
  flex: 1;
}
.active{
  color: var(--color-tint);
  border-bottom: 1px solid var(--color-tint);
}
.leftSlot{
position: absolute;
}
.leftSlot img{
  height: 35px;
  width: 35px;
  position: relative;
  top:10px;
  left: 15px;
}
.HeightBar{
  line-height: 50px;
  height: 50px;
}
</style>
