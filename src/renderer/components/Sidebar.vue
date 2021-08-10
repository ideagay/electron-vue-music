<template>
  <div class="sidebar">
    <div class="user">
      <img src="~@/assets/cat.jpeg" alt="">
      <span>用户名</span>
    </div>
    <nav class="nav">
      <router-link v-for="(nav, index) in navs"
      :key="index"
      :to="nav.path"><i :class="['iconfont', nav.icon]"></i>&nbsp;&nbsp;{{nav.name}}</router-link>
    </nav>
    <nav class="nav">
      <div class="title">我的音乐</div>
      <router-link v-for="(nav, index) in myMusic"
      :key="index"
      :to="nav.path"><i :class="['iconfont', nav.icon]"></i>&nbsp;&nbsp;{{nav.name}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      navs: [{
        path: '/',
        name: '发现音乐',
        icon: 'iconyinle'
      }, {
        path: '/',
        name: '私人FM',
        icon: 'icontubiaozhizuomobanyihuifu-'
      }, {
        path: '/',
        name: '视频',
        icon: 'iconshipinbofangyingpian'
      }, {
        path: '/',
        name: '朋友',
        icon: 'icondilanxianxingiconyihuifu_huabanfuben'
      }],
      myMusic: [{
        path: '/',
        name: 'iTunes音乐',
        icon: 'iconyinle'
      }, {
        path: '/',
        name: '下载管理',
        icon: 'iconxiazai'
      }, {
        path: '/',
        name: '最近播放',
        icon: 'iconzuijinbofang'
      }, {
        path: '/',
        name: '我的音乐云盘',
        icon: 'iconV'
      }, {
        path: '/',
        name: '我的电台',
        icon: 'icondiantai'
      }, {
        path: '/',
        name: '我的收藏',
        icon: 'iconshoucang1'
      }]
    };
  }
};
</script>

<style lang="less" scoped>
  .sidebar {
    width: 200px;
    min-width: 200px;
    height: ~"calc(100vh - 110px)";
    background: rgba(232, 233, 232, .5);
    overflow: auto;
    box-sizing: border-box;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 10px 20px 10px 10px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 10px;
    }
  }
  .nav {
    padding-left: 15px;
    font-size: 14px;
    margin-bottom: 20px;
    .title {
      font-size: 12px;
      color: #999;
    }
    a {
      display: block;
      height: 35px;
      line-height: 35px;
    }
  }
</style>
