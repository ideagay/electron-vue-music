<template>
  <div id="app">
    <my-header/>
    <div class="wrapper">
      <sidebar/>
      <transition name="fade">
        <router-view class="main-view"></router-view>
      </transition>
    </div>
    <play-bar />
  </div>
</template>

<script>
import MyHeader from '@/components/Layout/MyHeader.vue';
import Sidebar from '@/components/Layout/Sidebar.vue';
import PlayBar from '@/components/Layout/PlayBar.vue';

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
      width: 100%;
      box-sizing: border-box;
    }
  }
</style>
