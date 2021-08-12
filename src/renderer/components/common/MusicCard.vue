<template>
  <div class="music-card">
    <img :src="data.img">
    <div class="name"
    :style="{'-webkitLineClamp': lineClamp}">{{data.name}}</div>
    <div class="sub-name">{{data.author}}</div>
  </div>
</template>

<script>
export default {
  name: 'MusicCard',
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    lineClamp: {
      type: Number,
      default: 2
    }
  }
};
</script>

<style lang="less">
  .music-card {
    cursor: pointer;
    img {
      border-radius: @card-border-radius;
      width: 100%;
      height: auto;
    }
    .name {
      margin-top: 3px;
      color: #444;
      font-size: 14px;
      width: 100%; /*限制元素宽度*/
      line-height: 1.4;
      overflow: hidden; /*文本超出隐藏*/
      display: -webkit-box; /*盒子模型微弹性伸缩模型*/
      -webkit-box-orient: vertical;/*伸缩盒子的子元素垂直排列*/
      -webkit-line-clamp: 2; /*文本显示2行*/
      &:hover {
        color: #333;
      }
    }
    .sub-name {
      color: @muted-color;
      font-size: 12px;
      margin-top: 5px;
    }
  }
</style>
