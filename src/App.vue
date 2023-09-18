<script setup lang="ts"></script>

<template>
  <div class="content">
    <el-button>demo</el-button>
    <div></div>

    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.content {
  > div {
  }
}
</style>
