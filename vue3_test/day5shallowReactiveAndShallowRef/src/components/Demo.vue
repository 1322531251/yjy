<template>
  <div>
    <h4>当前x.y的值：{{x.y}}</h4>
    <button @click="x.y++">y++</button>
    <hr>
    <h4>{{person}}</h4>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>
  
<script>
    import {ref,reactive,toRef,toRefs,shallowReactive,shallowRef} from 'vue'
  
    export default {
      name: 'Demo',

      setup(){

        // let person = shallowReactive({  //只考虑第一层数据的响应式
        let person = reactive({
            name:'张三',
            age:18,
            job:{
              j1:{
                salary:20
              }
            }
        })

        // let x = ref({
        //   y:0
        // })
        let x = shallowRef({
          y:0
        })

        return{
          x,
          person,
          ...toRefs(person)
        }
      },


    }
  
</script>
  
  