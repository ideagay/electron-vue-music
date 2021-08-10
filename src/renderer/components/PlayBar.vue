<template>
  <div class="play-bar">
    <div class="item info">
      <img src="~@/assets/cat.jpeg" alt="">
      <div>
        <div class="text"><span>假如让我说下去</span>&nbsp;-&nbsp;<span class="muted-color">杨千嬅</span></div>
        <div class="time">02:11 / 04:11</div>
      </div>
    </div>
    <div class="item control">
      <i class="iconfont iconlove"></i>
    </div>
    <div class="item tool"></div>
  </div>
</template>

<script>
export default {
  name: 'PlayBar',
  components: {
  }
};
</script>

<style lang="less" scoped>
  .play-bar {
    width: 100vw;
    height: 60px;
    border-top: 1px solid #efefef;
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
  .info {
    display: flex;
    align-items: center;
    width: 30%;
    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      display: block;
      margin-right: 10px;
    }
    .text {
      font-size: 14px;
      margin-bottom: 3px;
    }
    .time {
      color: #999;
      font-size: 12px;
    }
  }
  .control {
    width: 50%;
    
  }
  .tool {
    width: 20%;
  }
</style>
