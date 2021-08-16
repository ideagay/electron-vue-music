<template>
  <div class="music-list">
    <div class="banner">
      <div class="bg" :style="{background: `url(${detail.banner.img}) 0 0/100% 100% no-repeat`}"></div>
      <img :src="detail.banner.img" alt="">
      <div class="info">
        <div class="tag">{{detail.banner.tag}}</div>
        <div class="title">{{detail.banner.title}}</div>
        <div class="desc">{{detail.banner.desc}}</div>
      </div>
    </div>
    <div class="tabs">
      <eva-button>全部歌单 ></eva-button>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" @click="tagClick(tag)">{{tag}}</span>
      </div>
    </div>
    <eva-row :gutter="20">
      <eva-col :span="6" v-for="item in detail.list" :key="item.id">
        <music-card :data="item" style="marginBottom: 40px;"></music-card>
      </eva-col>
    </eva-row>
  </div>
</template>

<script>
require('@/mock/MusicListPage.js');

export default {
  name: 'MusicListPage',
  data() {
    return {
      detail: {},
      tags: ['华语', '流行', '摇滚', '民谣', '电子', '另类/独立',
        '轻音乐', '综艺', '影视原声', 'ACG']
    };
  },
  methods: {
    getList() {
      this.$http.get('/musicList/data').then((res) => {
        this.detail = res;
      });
    },
    tagClick(tag) {
      console.log(tag);
      this.getList();
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style lang="less" scoped>
  .music-list {
    padding: 30px;
    width: 100%;
  }
  .banner {
    width: 100%;
    height: 170px;
    padding: 15px;
    border-radius: @card-border-radius;
    position: relative;
    overflow: hidden;
    display: flex;
    .bg {
      filter: blur(40px);
      width: 100%;
      height: 170px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
    img {
      display: block;
      border-radius: @card-border-radius;
      margin-right: 15px;
    }
    .info {
      .tag {
        border: 1px solid rgb(189,131,64);
        padding: 4px 10px;
        border-radius: 30px;
        font-size: 12px;
        color: rgb(189,131,64);
        display: inline-block;
        margin: 20px 0 15px 0;
      }
      .title {
        color: #fff;
        margin-bottom: 7px;
      }
      .desc {
        font-size: 12px;
        color: rgb(191, 191, 191);
      }
    }
  }
  .tabs {
    margin: 20px 0;
    display: flex;
    align-items: center;
    .tags {
      flex: 1;
      font-size: 12px;
      color: #666;
      text-align: right;
      span {
        padding-left: 12px;
        cursor: pointer;
        &:hover {
          color: #333;
        }
        &::before {
          content: '|';
          color: rgb(232, 232, 232);
          margin-right: 12px;
        }
        &:first-child {
          &::before {
            content: '';
          }
        }
      }
    }
  }
</style>
