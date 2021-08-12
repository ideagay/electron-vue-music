<template>
  <div class="eva-col" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EvaCol',
  props: {
    span: {
      type: Number,
      default: 0
    }
  },
  computed: {
    colStyle() {
      const padding = `${this.$parent.gutter / 2}px`;
      return {
        paddingLeft: padding,
        paddingRight: padding,
        width: `${(this.span / 24) * 100}%`
      };
    }
  }
};
</script>

<style lang="less">
  .eva-col {
    // display: flex;
  }
</style>
