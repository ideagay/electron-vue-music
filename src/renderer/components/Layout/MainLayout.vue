<template>
  <div class="main-layout">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'MainLayout',
  data() {
    return {
    };
  }
};
</script>

