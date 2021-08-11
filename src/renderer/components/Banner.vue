<template>
  <div class="banner">
    <!-- <div class="imgs">
      <img :src="imgs[prevIndex]" class="prev">
      <img :src="imgs[currentIndex]" class="current">
      <img :src="imgs[nextIndex]" class="next">
    </div> -->
      <div class="imgs">
        <transition-group name="flip-list" tag="ul">
          <img :src="img" :class="{'current': index === currentIndex,
          'prev': index === prevIndex, 'next': index === nextIndex}"
          v-for="(img, index) in imgs" :key="index">
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
      currentIndex: 0,
      imgs: ['http://p1.music.126.net/UFccSDzsg-Lc4nf5I60HJw==/109951166268345690.jpg?imageView&quality=89',
        'http://p1.music.126.net/2EhMvHLglu0beb3QaTtA8Q==/109951166268917890.jpg?imageView&quality=89',
        'http://p1.music.126.net/44nFHC3ESjIeHRcf9NUC8A==/109951166268877128.jpg?imageView&quality=89',
        'http://p1.music.126.net/RCTUQ6G4ucXP0zi9KyR2Sw==/109951166268898866.jpg?imageView&quality=89']
    };
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
  destroyed() {
    clearInterval(this.interval);
    this.interval = null;
  },
  mounted() {
    const len = this.imgs.length;
    this.interval = setInterval(() => {
      if (this.currentIndex === len - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    }, 5000);
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
