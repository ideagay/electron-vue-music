<template>
  <div class="banner">
      <div class="imgs">
        <transition-group name="flip-list" tag="ul">
          <img :src="item.img" :class="{'current': index === currentIndex,
          'prev': index === prevIndex, 'next': index === nextIndex}"
          v-for="(item, index) in imgs" :key="index">
        </transition-group>
      </div>
    <div class="dots">
      <i v-for="(img, index) in imgs" :key="index"
      :class="{active: index === currentIndex}"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      interval: null,
      currentIndex: 0
    };
  },
  props: {
    imgs: {
      type: Array,
      default: () => ([])
    }
  },
  computed: {
    prevIndex() {
      return this.currentIndex > 0 ? this.currentIndex - 1 : this.imgs.length - 1;
    },
    nextIndex() {
      const len = this.imgs.length;
      return this.currentIndex === len - 1 ? 0 : this.currentIndex + 1;
    }
  },
  watch: {
    imgs(val) {
      if (val.length > 0) {
        this.start();
      }
    }
  },
  destroyed() {
    clearInterval(this.interval);
    this.interval = null;
  },
  methods: {
    start() {
      const len = this.imgs.length;
      this.interval = setInterval(() => {
        if (this.currentIndex === len - 1) {
          this.currentIndex = 0;
        } else {
          this.currentIndex += 1;
        }
      }, 5000);
    }
  }
};
</script>

<style lang="less" scoped>
  .flip-list-move {
    transition: transform .8s;
  }
  .banner {
    width: 100%;
    .imgs {
      height: 200px;
      position: relative;
      img {
        width: auto;
        position: absolute;
        border-radius: 10px;
        opacity: 0;
      }
      .prev {
        left: 0;
        top: 15px;
        height: 170px;
        opacity: 1;
      }
      .next {
        right: 0;
        top: 15px;
        height: 170px;
        opacity: 1;
      }
      .current {
        height: 200px;
        left: 50%;
        z-index: 1;
        transform: translateX(-50%);
        opacity: 1;
      }
    }
    .dots {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 15px 0;
      i {
        width: 6px;
        height: 6px;
        display: block;
        margin-right: 10px;
        background: #ccc;
        border-radius: 100%;
        &.active {
          background: @primary-color;
        }
      }
    }
  }
</style>
