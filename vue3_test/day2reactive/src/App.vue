<template>
  <div>
  <h1>信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>工作种类：{{person.job.type}}</h3>
  <h3>工作薪水：{{person.job.salary}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <h3>test:{{person.job.a.b.c}}</h3>
  <button @click="changeInfo">修改信息</button>
  </div>
</template>

<script>
  import {reactive} from 'vue'

  export default {
    name: 'App',

    //测试
    setup(){
      //数据
      let person = reactive({
        name:'王五',
        age:18,
        job:{
          type:'前端工程师',
          salary:'30k',
          a:{
            b:{
              c:666
            }
          }
        },
        salary:'20k',
        hobby:'抽烟'
      })

      function changeInfo(){
        person.name= 'lili'
        person.age = 66

        // console.log('更改',job);
      }

      //返回一个对象（常用
      return{
        person,
        changeInfo,

      }
    }
  }

</script>

