<template>
  <div class="new-music">
    <sec-title>最新音乐</sec-title>
    <eva-row class="list" :gutter="40">
      <eva-col :span="12"
      v-for="(item, index) in list" :key="index">
        <div class="item">
          <img :src="item.img">
          <div class="num">{{index | serialNum}}</div>
          <div class="info">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.author}}</div>
          </div>
        </div>
      </eva-col>
    </eva-row>
  </div>
</template>

<script>
export default {
  name: 'NewMusic',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  filters: {
    serialNum: (val) => {
      const oval = val + 1;
      if (oval < 10) {
        return `0${oval}`;
      }
      return oval;
    }
  }
};
</script>

<style lang="less">
  .new-music {
    margin-bottom: 60px;
    .list {
      .item {
        display: flex;
        border-top: 1px solid #efefef;
        padding: 10px 0;
        img {
          width: 60px;
          height: 60px;
          display: block;
          margin-right: 10px;
          border-radius: @card-border-radius;
        }
        .num {
          font-size: 14px;
          color: rgb(191, 191, 191);
          margin-right: 10px;
          padding-top: 20px;
        }
        .info {
          flex: 1;
          padding-top: 10px;
          .name {
            margin-bottom: 5px;
            font-size: 14px;
            .line-clamp(1);
          }
          .desc {
            font-size: 12px;
            color: @muted-color;
          }
        }
      }
    }
  }
</style>
