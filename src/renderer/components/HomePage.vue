<template>
  <div class="home">
    <banner />
    <div>
      <sec-title>推荐歌单</sec-title>
      <eva-row :gutter="20">
        <eva-col style="width: 20%;" v-for="(item, index) in recommend" :key="index">
          <music-card
          style="marginBottom: 30px;"
           :data="item">
          </music-card>
        </eva-col>
      </eva-row>
    </div>
    <div class="recom"></div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import SecTitle from '@/components/common/SecTitle.vue';
import MusicCard from '@/components/common/MusicCard.vue';
import EvaRow from '@/components/common/EvaRow.vue';
import EvaCol from '@/components/common/EvaCol.vue';
require('@/mock/homePage.js');

export default {
  name: 'Home',
  components: {
    Banner,
    SecTitle,
    MusicCard,
    EvaRow,
    EvaCol
  },
  data() {
    return {
      recommend: []
    };
  },
  mounted() {
    this.$http.get('/home/recommend').then((res) => {
      console.log(res);
      this.recommend = res.data.list;
    });
  }
};
</script>

<style lang="less" scoped>
  .home {
    padding: 30px;
    width: 100%;
  }
</style>
