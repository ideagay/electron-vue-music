<template>
  <div class="fm">
    <sec-title>主播电台</sec-title>
    <eva-row class="list" :gutter="40">
      <eva-col :span="12"
      v-for="(item, index) in list" :key="index">
        <div class="item">
          <img :src="item.img">
          <div class="info">
            <div class="name">{{item.name}}</div>
            <div class="desc">{{item.desc}}</div>
          </div>
        </div>
      </eva-col>
    </eva-row>
  </div>
</template>

<script>
export default {
  name: 'Fm',
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  }
};
</script>

<style lang="less" scoped>
  .fm {
    .list {
      .item {
        display: flex;
        border-top: 1px solid #efefef;
        padding: 10px 0;
        img {
          width: 90px;
          height: 90px;
          display: block;
          margin-right: 20px;
          border-radius: @card-border-radius;
        }
        .info {
          flex: 1;
          padding-top: 20px;
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
