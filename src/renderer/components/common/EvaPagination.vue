<template>
  <div class="eva-pagination">
    <span @click="step('prev')"><i class="iconfont iconyoujiantou1"></i></span>
    <span v-for="p in pages" :key="p"
    @click="currentChange(p)"
    :class="{'active': p === current}">{{p}}</span>
    <span @click="step('next')"><i class="iconfont iconyoujiantou"></i></span>
  </div>
</template>

<script>
export default {
  name: 'EvaPagination',
  data() {
    return {
      current: 1
    };
  },
  props: {
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pages() {
      return Math.ceil(this.total / this.pageSize);
    }
  },
  methods: {
    currentChange(val) {
      this.current = val;
      this.$emit('current-change', val);
    },
    step(type) {
      const current = this.current + (type === 'next' ? 1 : -1);
      if (current < 1 || current > this.pages) {
        return;
      }
      this.current = current;
      this.$emit('current-change', this.current);
    }
  }
};
</script>

<style lang="less">
  .eva-pagination {
    text-align: center;
    font-size: 0; // 消除换行间距
    span {
      display: inline-block;
      cursor: pointer;
      width: 25px;
      height: 25px;
      line-height: 25px;
      border-radius: 4px;
      border: 1px solid rgb(199, 199, 199);
      text-align: center;
      font-size: 12px;
      color: @minor-color;
      vertical-align: middle;
      margin: 0 2px;
      &:hover {
        background-color: @hover-bg;
        color: #333;
      }
      &.active {
        background-color: @primary-color;
        color: #fff;
      }
    }
  }
</style>
