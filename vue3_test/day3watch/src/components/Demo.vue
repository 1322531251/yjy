<template>
  <div>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">sum++</button>
    <hr>
    <h2>{{msg}}</h2>
    <button @click="msg += '!'">修改</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.j1.salary}}k</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>
  
<script>
    import {ref,watch,reactive} from 'vue'
  
    export default {
      name: 'Demo',

      setup(){
        let sum = ref(0)
        let msg = ref('你好')

        let person = reactive({
          name:'张三',
          age:18,
          job:{
            j1:{
              salary:20
            }
          }
        })

        //1.监视ref定义的一个响应式数据
        // watch(sum,(newValue,oldValue)=>{
        //   console.log('sum变了',newValue,oldValue);
        // },{immediate:true})

        //2.监视ref定义的多个响应式数据
        // watch([sum,msg],(newValue,oldValue)=>{
        //   console.log('sum变了',newValue,oldValue);
        // },{immediate:true})

        //3.监视reactive定义的一个响应式数据
            // 1）ps：此处无法正确的获取oldValue
            // 2）ps：强制开启了深度监视（deep配置无效
          // watch(person,(newValue,oldValue)=>{
          //   console.log('person变化了',newValue,oldValue);
          // },{deep:false})//此处的deep配置无效

        //4.监视reactive定义的一个响应式数据中的某个属性
          // watch(()=>person.age,(newValue,oldValue)=>{
          //   console.log('person中的age变化了',newValue,oldValue);
          // })

        //5.监视reactive定义的一个响应式数据中的某些属性
          // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
          //   console.log('person中的age/name变化了',newValue,oldValue);
          // })

        //特殊情况
          watch(()=>person.job,(newValue,oldValue)=>{
            console.log('person中的job变化了',newValue,oldValue);
          },{deep:true}) //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效

        return{
            sum,
            msg,
            person
        }
      },


    }
  
</script>
  
  