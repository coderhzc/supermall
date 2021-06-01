<template>
  <div class="detail-image">
    <div class="detail-image-key">
      {{detailimage.key}}
    </div>
    <div class="detail-image-img" v-for="item in detailimage.list">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImage",
  props:{
    detailimage:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.detail-image{
  width: 90%;
  margin: auto;
}
.detail-image-key{
  text-indent: 2em;
  margin-bottom: 15px;
}
.detail-image-img img{
  width: 100%;
}
</style>
