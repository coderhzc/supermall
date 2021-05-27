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
  data(){
    return{
      Scroll:null,
    }
  },
  mounted() {
    this.Scroll=new BScroll(this.$refs.wrapper,{        //通过ovserveDOM，随时刷新挂载，重新刷新scroll
      click:true,
      observeDOM:true
    })
  },
  methods:{         //包装scrollTo方法
    scrollTo(x,y,time){
      this.Scroll.scrollTo(x,y,time=300)
    }
  }
}
</script>

<style scoped>

</style>
