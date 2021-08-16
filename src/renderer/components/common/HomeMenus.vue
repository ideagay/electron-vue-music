<template>
  <div class="menus">
    <router-link v-for="item in menus" :key="item.path"
    :to="item.path">{{item.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeMenus',
  data() {
    return {
      menus: [{
        name: '个性推荐',
        path: '/home/recommend'
      }, {
        name: '歌单',
        path: '/home/music-list'
      }]
    };
  }
};
</script>

<style lang="less" scoped>
  .menus {
    font-size: 15px;
    a {
      margin-right: 20px;
      color: #666;
    }
    .router-link-exact-active {
      color: #222;
      font-weight: 600;
    }
  }
</style>
