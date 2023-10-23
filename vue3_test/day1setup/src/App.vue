<template>
  <h1>信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别：{{sex}}</h2>
  <h2>a：{{a}}</h2>
  <button @click="sayWelcome">说话（vue2</button>
  <br><br>
  <button @click="sayHi">说话（vue3</button>
  <br><br>
  <button @click="test1">test1测试在vue2的配置中读取vue3的数据和方法</button>
  <br><br>
  <button @click="test2">test2测试在vue3的setup配置中读取vue3的数据和方法</button>
</template>

<script>
  // import {h} from 'vue'

  export default {
    name: 'App',
    data() {
      return {
        sex:'男',
        a:100
      }
    },
    methods: {
      sayWelcome(){
        alert('欢迎学习vue3')
      },
      test1(){
        console.log(this.sex);
        console.log(this.name);
        console.log(this.age);
        console.log(this.sayHi);
      }
    },

    //测试
    setup(){
      //数据
      let name = '张三'
      let age = 18
      let a = 200

      //方法
      function sayHi(){
        alert(`我叫${name}，我${age}岁，你好！`)
      }
      function test2(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.sex);
        console.log(this.sayWelcome);
      }

      //返回一个对象（常用
      return{
        name,
        age,
        a,
        sayHi,
        test2
      }

      //返回一个函数（渲染函数
      return ()=>{
        return h('h1','黑科技')
      }
    }
  }
</script>

