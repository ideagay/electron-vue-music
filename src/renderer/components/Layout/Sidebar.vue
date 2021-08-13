<template>
  <div class="sidebar">
    <div class="user">
      <img src="~@/assets/cat.jpeg" alt="">
      <span>用户名</span>
    </div>
    <nav class="nav">
      <router-link v-for="nav in navs"
      :key="nav.name"
      :to="nav.path"><i :class="['iconfont', nav.icon]"></i>&nbsp;&nbsp;{{nav.name}}</router-link>
    </nav>
    <nav class="nav">
      <div class="title">我的音乐</div>
      <router-link v-for="nav in myMusic"
      :key="nav.name"
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
        path: '/home',
        name: '发现音乐',
        icon: 'iconyinle'
      }, {
        path: '/fm',
        name: '私人FM',
        icon: 'icontubiaozhizuomobanyihuifu-'
      }, {
        path: '/video',
        name: '视频',
        icon: 'iconshipinbofangyingpian'
      }, {
        path: '/friend',
        name: '朋友',
        icon: 'icondilanxianxingiconyihuifu_huabanfuben'
      }],
      myMusic: [{
        path: '/itunes',
        name: 'iTunes音乐',
        icon: 'iconyinle'
      }, {
        path: '/download',
        name: '下载管理',
        icon: 'iconxiazai'
      }, {
        path: '/recent',
        name: '最近播放',
        icon: 'iconzuijinbofang'
      }, {
        path: '/yun',
        name: '我的音乐云盘',
        icon: 'iconV'
      }, {
        path: '/radio',
        name: '我的电台',
        icon: 'icondiantai'
      }, {
        path: '/collection',
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
    font-size: 14px;
    margin-bottom: 20px;
    padding-right: 8px;
    .title {
      font-size: 12px;
      color: #999;
      padding-left: 15px;
    }
    a {
      display: block;
      height: 35px;
      line-height: 35px;
      padding-left: 15px;
    }
  }
  .router-link-active {
    color: @primary-color;
    background: rgba(218, 218, 218, .5);
  }
</style>
