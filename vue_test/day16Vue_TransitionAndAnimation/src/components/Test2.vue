<template>
    <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="move" appear>
          <h1 v-show="!isShow" key="1">你好</h1>
          <h1 v-show="isShow" key="2">hello</h1>
      </transition-group>
  </div>
  </template>
  
  <script>
  export default {
      name:'Test2',
      data() {
          return {
              isShow:true
          }
      },
  }
  </script>
  
  <style>
      h1{
          background-color: orange;
      }

      /* 进入的起点  离开的终点 */
      .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
      }

      .hello-enter-active,.hello-leave-active{
        transition: .5s;
      }

      /* 进入的终点  离开的起点 */
      .hello-enter-to,.hello-leave{
        transform: translateX(0px);
      }
  
  </style>