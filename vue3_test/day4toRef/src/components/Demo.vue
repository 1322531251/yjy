<template>
  <div>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>
  
<script>
    import {reactive,toRef,toRefs} from 'vue'
  
    export default {
      name: 'Demo',

      setup(){

        let person = reactive({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          }
        })

        // const name = toRef(person,'name')
        // const age = toRef(person,'age')
        // const salary = toRef(person.job.j1,'salary')

        const x = toRefs(person)


        return{
            // name,
            // age,
            // salary

            ...toRefs(person)
        }
      },


    }
  
</script>
  
  