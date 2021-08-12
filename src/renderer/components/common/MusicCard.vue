<template>
  <div class="music-card">
    <img :src="data.img">
    <div class="name">{{data.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'MusicCard',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="less">
  .music-card {
    img {
      border-radius: @card-border-radius;
      width: 100%;
      height: auto;
    }
    .name {
      font-size: 14px;
      width: 100%; /*限制元素宽度*/
      line-height: 1.4;
      overflow: hidden; /*文本超出隐藏*/
      display: -webkit-box; /*盒子模型微弹性伸缩模型*/
      -webkit-box-orient: vertical;/*伸缩盒子的子元素垂直排列*/
      -webkit-line-clamp: 2; /*文本显示3行*/
    }
  }
</style>
