<template>
  <div class="home">
    <banner />
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
    width: 100%;
  }
</style>
