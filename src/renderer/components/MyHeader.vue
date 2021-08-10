<template>
  <div class="header">
    <div class="control">关闭</div>
    <div class="menus"></div>
    <div class="tools">
      <search-bar class="item"></search-bar>
      <i class="iconfont iconshezhi"></i>
      <i class="iconfont iconxinfeng"></i>
      <i class="iconfont iconbiaoqianA01_pifu-46"></i>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'MyHeader',
  components: {
    SearchBar
  }
};
</script>

<style lang="less" scoped>
  .header {
    -webkit-app-region: drag;
    width: 100vw;
    height: 50px;
    background: rgb(247, 247, 247);
    display: flex;
    align-items: center;
    padding: 0 15px;
    .control {
      width: 200px;
    }
    .menus {
      flex: 1;
    }
    .tools {
      width: 260px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .iconfont {
        margin-left: 20px;
        font-size: 18px;
      }
    }
  }
</style>
