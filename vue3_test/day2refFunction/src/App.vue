<template>
  <div>
  <h1>信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>工作种类：{{job.type}}</h3>
  <h3>工作薪水：{{job.salary}}</h3>
  <button @click="changeInfo">修改信息</button>
  </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    name: 'App',

    //测试
    setup(){
      //数据
      let name = ref('张三')
      let age = ref(18)
      let job = ref({
        type:'前端工程师',
        salary:'30k'

      })

      function changeInfo(){
        name.value = '李四'
        age.value = 12
        // job.value = {
        //   type:'java工程师',
        //   salary:'50k'
        // }
        job.value.type = 'java工程师'
        job.value.salary = '50k'
        // console.log('更改',name,age);
      }

      //返回一个对象（常用
      return{
        name,
        age,
        job,
        changeInfo,

      }
    }
  }

</script>

