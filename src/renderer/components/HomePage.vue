<template>
  <div class="home">
    <banner />
    首页
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';

export default {
  name: 'Home',
  components: {
    Banner
  }
};
</script>

<style lang="less" scoped>
  .home {
    padding: 30px;
  }
</style>
