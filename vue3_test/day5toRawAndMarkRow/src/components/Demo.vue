<template>
  <div>
    <h4>当前sum的值：{{sum}}</h4>
    <button @click="sum++">点加</button>
    <hr>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.j1.salary}}k</h2>
    <h2 v-show="person.car">汽车信息：{{person.car}}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给person添加一个car</button>
    <button @click="person.car.name += '1'">换车名</button>
    <button @click="changePrice">换价格</button>
  </div>
</template>
  
<script>
    import {ref,reactive,toRefs,toRaw,markRaw} from 'vue'
  
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

        //只处理reactive定义的响应式数据 ===> 原始数据
      function showRawPerson(){
        const p = toRaw(person)
        console.log(p);
      }

      function addCar(){
        let car = {name:'奔驰', price:40}
        person.car = markRaw(car)
      }

      function changePrice(){
        person.car.price++
      }

      return{
          sum,
          person,
          ...toRefs(person),
          showRawPerson,
          addCar,
          changePrice
      }
    },


    }
  
</script>
  
  