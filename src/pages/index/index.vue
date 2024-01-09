<template>
  <div class="content">
    <div class="horizontal-line"></div>
    <div class="card">
      <div class="card-content">
        <Card v-for="item in nav" :key="item" class="item" @click="GoTo(item.url)">
          <div class="item-content">
            <img :src="item?.image" alt="" />
            <h3>{{ item.title }}</h3>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ship from '@/assets/ship.svg'
import uav from '@/assets/uav.svg'
const nav = reactive([
  {
    title: '无人船模块',
    url: 'http://localhost:8080/#/visualization?abc=123',
    image: ship
  },
  {
    title: '无人机模块',
    image:uav
  },
  {
    title: '全地形机器人模块'
  },
  {
    title: '满水管机器人模块'
  },
 
])
const GoTo = (url: any) => {
  window.location.href = url
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
.content {
  width: 100%;
}
.horizontal-line {
  background-image: url('@/assets/horizontalLine.png');
  height: 46px;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  background-size: 100% 100%;
}
.card {
  padding: 40px 120px 0px 120px;
  $width: 264px;
  $height: 294px;

  .card-content {
    height: $height;
    width: 100%;
    display: grid;
    grid-template-columns:  repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center;  
  align-items: center;  
    .item {
      width: $width;
      height: $height;
      transition: transform 0.3s ease; /* 定义过渡效果 */
      // width: 264px;
      cursor: pointer;
      background: url('@/assets/card.png') no-repeat;
      background-size: 100% 100%;
      .item-content {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;
        img {
          height: 100px;
        }
      }
      h3 {
        font-size: 20px;
        color: white;
      }
      &:hover {
        transform: translateY(-10px);
      }
    }
  }
}
// .card {

//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   height: 90%;
//   align-items: center;
//   padding-bottom: $height;
//   padding-right: $width;

//   .card-content{
//     transform-style: preserve-3d;
//     transform: rotateX(-80deg);
//   }
//   .item {
//   position: absolute;
//   border: 1px solid red;
//   width: $width;
//   height: $height;
//   transition: transform 0.3s ease; /* 定义过渡效果 */
//   background-image: url('@/assets/bj.jpg');
//   $n:4;
//   $pDeg:180deg / $n;
//   $r:500px;
//   opacity: 0.5;
//   // backface-visibility: hidden;
//   @for $i from 1 through $n {
//     &:nth-child(#{$i}){
//       $deg:$pDeg * ($i - 1);
//       $x:math.sin($deg) *$r;
//       $z:math.cos($deg) *$r;
//       transform: translate3d($x,0,$z) rotateY(180deg + $deg);
//     }
//   }
//   &:hover{
//     opacity: 1;
//   }
// }
// }
</style>
