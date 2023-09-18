<script setup lang="ts">
import { login } from '@/api/index'

login({
  userName: 'hongwan',
  passWord:
    'PIv/32We9iKqAIqRQfHq//mdgUAiGRouFuisIto1xef43tM8HgfQ8MoQ3YDn0j/Tpv/6kyurgxQu//0Gakx75y8AtC8FGFzSJ9pVdMx8kZ+hnGPqw7IBedHT5LhAG2RjkJlAnyLZVb5fRWcT60xlazDoFBnbUWyh5UqRtwjhd70='
})
</script>

<template>
  <div class="content">
    <el-button>demo</el-button>
    <div>213123</div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.content {
  border: 1px solid red;
}
</style>
