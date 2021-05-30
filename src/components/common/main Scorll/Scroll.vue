<template>        <!--使用better-scroll,使得滚动顺滑。-->
<div class="wrapper" ref="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "Scroll",
  props:{
    isBackTop:{
      type:Number,
      default:0
    },
    ispullUpLoad:{
      type:Boolean,
      default: false,
    }
  },
  data(){
    return{
      Scroll:null,
    }
  },
  mounted() {
    this.Scroll=new BScroll(this.$refs.wrapper,{        //通过observeDOM，随时刷新挂载，重新刷新scroll
      click:true,
      observeDOM:true,
      probeType:this.isBackTop,
      pullUpLoad:this.ispullUpLoad,
    })
    this.Scroll.on('scroll',(position) => {
      this.$emit('scroll',position)
    })
    this.Scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })

  },
  methods:{         //包装scrollTo方法
    scrollTo(x,y,time){
      this.Scroll.scrollTo(x,y,time=300)
    },
    finishPullUp(){
      this.Scroll.finishPullUp()
    },
    getScrollY(){
     return this.Scroll.y
    },
    getRefresh(){
      this.Scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
