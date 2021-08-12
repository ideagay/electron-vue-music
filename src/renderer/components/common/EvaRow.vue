<template>
  <div class="eva-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EvaRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    }
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `-${this.gutter / 2}px`,
        marginRight: `-${this.gutter / 2}px`
      };
    }
  }
};
</script>

<style lang="less">
  .eva-row {
    display: flex;
    flex-wrap: wrap;
  }
</style>
