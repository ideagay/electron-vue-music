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
      <eva-button>全部歌单&nbsp;<i class="iconfont iconyoujiantou"></i></eva-button>
      <div class="tags">
        <span v-for="tag in tags" :key="tag"
        :class="{'active': tag === params.tag}"
        @click="tagClick(tag)">{{tag}}</span>
      </div>
    </div>
    <eva-row :gutter="20">
      <eva-col :span="6" v-for="item in detail.list" :key="item.id">
        <music-card :data="item" style="marginBottom: 40px;"></music-card>
      </eva-col>
    </eva-row>
    <eva-pagination :total="21"
    @current-change="currentChange"></eva-pagination>
  </div>
</template>

<script>
require('@/mock/MusicListPage.js');

export default {
  name: 'MusicListPage',
  data() {
    return {
      detail: {},
      params: {
        pageSize: 10,
        tag: '',
        currentPage: 1
      },
      tags: ['华语', '流行', '摇滚', '民谣', '电子', '另类/独立',
        '轻音乐', '综艺', '影视原声', 'ACG']
    };
  },
  methods: {
    getList() {
      this.$http.post('/musicList/data', this.params).then((res) => {
        this.detail = res;
      });
    },
    tagClick(tag) {
      this.params.tag = tag;
      this.getList();
    },
    currentChange(val) {
      this.params.current = val;
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
        padding:2px 8px;
        cursor: pointer;
        border-radius: 20px;
        position: relative;
        margin-left: 10px;
        &:hover {
          color: #333;
        }
        &::before {
          content: '|';
          color: rgb(240, 240, 240);
          position: absolute;
          top: 0;
          left: -6px;
        }
        &:first-child {
          &::before {
            content: '';
          }
        }
        &.active {
          background-color: #fcf2f1;
          color: @primary-color;
        }
      }
    }
  }
</style>
