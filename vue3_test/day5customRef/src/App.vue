<template>
  <div>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
  </div>
</template>

<script>
  import {ref,customRef} from 'vue'

  export default {
    name: 'App',
    setup() {

      //自定义的ref---myRef
      function myRef(value,delay){
        let timer
        return customRef((track,trigger)=>{
          return {
            get(){
              console.log('读取数据');
              track() //通知vue追踪value的变化
              return value
            },
            set(newValue){
              console.log('修改数据');
              clearTimeout(timer)
              timer = setTimeout(()=>{
                value = newValue
                trigger()//通知vue重新解析模板
              },delay)
            }
          }
        })
      }


      // let keyWord = ref('hello') //使用Vue提供的ref
      let keyWord = myRef('hello',500) //使用程序员自定义的ref

      return{
        keyWord,
      }
    }
  }

</script>

