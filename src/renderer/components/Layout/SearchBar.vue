<template>
  <div class="search-bar">
    <div class="input-wrapper">
      <i class="iconfont iconsousuo"></i>
      <input type="text" placeholder="搜索">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
};
</script>

<style lang="less" scoped>
  .search-bar {
    .input-wrapper {
      background: rgb(231, 231, 231);
      border-radius: 30px;
      height: 22px;
      line-height: 22px;
      padding: 0 4px;
      display: flex;
      box-sizing: border-box;
      input {
        outline: none;
        border: none;
        background: none;
        margin-left: 2px;
      }
    }
  }
</style>
