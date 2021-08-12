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
      <fm />
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import SecTitle from '@/components/common/SecTitle.vue';
import MusicCard from '@/components/common/MusicCard.vue';
import EvaRow from '@/components/common/EvaRow.vue';
import EvaCol from '@/components/common/EvaCol.vue';
import Fm from '@/components/HomePage/Fm.vue';
require('@/mock/homePage.js');

export default {
  name: 'Home',
  components: {
    Banner,
    SecTitle,
    MusicCard,
    EvaRow,
    EvaCol,
    Fm
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
