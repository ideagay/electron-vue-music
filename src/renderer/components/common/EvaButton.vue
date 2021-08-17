<template>
  <div class="eva-button">
    <i class="iconfont" :class="icon" v-if="icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EvaButton',
  props: {
    type: {
      type: String,
      validator(value) {
        return ['primary', 'success', 'warning', 'danger', 'info'].indexOf(value) !== -1;
      }
    },
    icon: String
  }
};
</script>

<style lang="less">
  .eva-button {
    cursor: pointer;
    display: inline-block;
    border: 1px solid rgb(212, 212, 212);
    border-radius: 20px;
    color: #333;
    padding: 7px 12px;
    line-height: 1;
    font-size: 13px;
    * {
      vertical-align: text-top;
    }
    &:hover {
      background-color: @hover-bg;
    }
  }
</style>
