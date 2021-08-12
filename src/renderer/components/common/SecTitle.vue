<template>
  <div class="sec-title">
    <slot></slot><i class="iconfont iconyoujiantou"></i>
  </div>
</template>

<script>
export default {
  name: 'SecTitle'
};
</script>

<style lang="less" scoped>
  .sec-title {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 15px;
    i {
      font-size: 20px;
      margin-left: 4px;
      vertical-align: text-top;
    }
  }
</style>
