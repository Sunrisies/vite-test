<template>
  <div class="root">
    <h1 class="root-title">{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
const title = ref('虹湾威鹏 3S+AI 智慧平台')
</script>
<style scoped>
.root {
  width: 100%;
  height: 100%;
  background: url('@/assets/background.png');
  background-size: 100% 100%;
  background-position: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.root-title {
  background: url('@/assets/title.png');
  background-position: center;
  position: absolute;
  top: 0px;
  height: 76px;
  width: 100%;
  font-size: 46px;
  color: white;
  text-align: center;
}</style>
