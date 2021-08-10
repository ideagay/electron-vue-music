<template>
  <div id="app">
    <my-header/>
    <div class="wrapper">
      <sidebar/>
      <router-view class="main-view"></router-view>
    </div>
    <play-bar />
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import Sidebar from '@/components/Sidebar.vue';
import PlayBar from '@/components/PlayBar.vue';

export default {
  name: 'electron-vue-app',
  components: {
    MyHeader,
    Sidebar,
    PlayBar
  },
};
</script>

<style lang="less">
@import url('./styles/basic.less');
  /* CSS */
  #app {
    height: 100vh;
    .wrapper {
      display: flex;
    }
    .main-view {
      height: ~"calc(100vh - 110px)";
      overflow: auto;
      box-sizing: border-box;
    }
  }
</style>
