<template>
  <div class="container">
    <!-- <Category title="美食">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
      <a slot="footer" href="http://baidu.com">更多美食</a>
    </Category> -->

    <Category title="游戏">
      <!-- <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://baidu.com">单机游戏</a>
        <a href="http://baidu.com">网络游戏</a>
      </div> -->
      <template scope="Games">
        <ul slot="center">
          <li v-for="(g,index) in Games.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>    

    <Category title="游戏">
      <!-- ES6解构赋值 -->
      <template scope="{games}">
        <ol slot="center">
          <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <!-- <template scope="{games}"> -->
      <template slot-scope="{games}">
          <h4 style="color:blue" v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Category>
 
    <!-- <Category title="电影">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
        <a href="http://baidu.com">经典</a>
        <a href="http://baidu.com">热门</a>
        <a href="http://baidu.com">推荐</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
    </Category> -->
  </div>
</template>

<script>
  import Category from './components/Category'

  export default {
      name:'App',
      components:{Category},
  }
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }

</style>













