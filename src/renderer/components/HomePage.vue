<template>
  <div class="home">
    <banner :imgs="info.banner" />
    <div class="section">
      <sec-title>推荐歌单</sec-title>
      <eva-row :gutter="20">
        <eva-col style="width: 20%;" v-for="(item, index) in info.recommend" :key="index">
          <music-card
          style="marginBottom: 30px;"
           :data="item">
          </music-card>
        </eva-col>
      </eva-row>
    </div>
    <div class="section">
      <sec-title>独家放送</sec-title>
      <eva-row :gutter="20">
        <eva-col :span="6" v-for="item in info.dujia" :key="item.id">
          <music-card
          style="marginBottom: 30px;"
           :data="item">
          </music-card>
        </eva-col>
      </eva-row>
    </div>
    <div class="section">
      <new-music :list="info.newMusic"/>
    </div>
    <div class="section">
      <sec-title>推荐MV</sec-title>
      <eva-row :gutter="20">
        <eva-col :span="6" v-for="item in info.mv" :key="item.id">
          <music-card
          style="marginBottom: 30px;"
           :data="item"
           :lineClamp="1">
          </music-card>
        </eva-col>
      </eva-row>
    </div>
    <div class="section">
      <fm :list="info.fm"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/HomePage/Banner.vue';
import Fm from '@/components/HomePage/Fm.vue';
import NewMusic from '@/components/HomePage/NewMusic.vue';
require('@/mock/homePage.js');

export default {
  name: 'Home',
  components: {
    Banner,
    Fm,
    NewMusic
  },
  data() {
    return {
      info: {}
    };
  },
  mounted() {
    this.$http.get('/home/data').then((res) => {
      this.info = res;
    });
  }
};
</script>

<style lang="less" scoped>
  .home {
    padding: 30px;
    width: 100%;
    .section {
      margin-bottom: 20px;
    }
  }
</style>
