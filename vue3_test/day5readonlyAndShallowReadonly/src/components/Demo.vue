<template>
  <div>
    <h4>当前sum的值：{{sum}}</h4>
    <button @click="sum++">点加</button>
    <hr>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>
  
<script>
    import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'
  
    export default {
      name: 'Demo',
      setup(){
        let sum = ref(0)
        let person = reactive({
            name:'张三',
            age:18,
            job:{
              j1:{
                salary:20
              }
            }
        })

        // person = readonly(person)
        person = shallowReadonly(person)
        // sum = readonly(sum)

        return{
          sum,
          ...toRefs(person)
        }
      },


    }
  
</script>
  
  