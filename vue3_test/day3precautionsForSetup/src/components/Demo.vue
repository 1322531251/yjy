<template>
    <div>
    <h1>信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <button @click="test">测试hello事件</button>
    </div>
  </template>
  
  <script>
    import {reactive} from 'vue'
  
    export default {
      name: 'Demo',
      props:['msg','school'],
  
    //   beforeCreate() {
    //     console.log('---beforeCreate---')
    //   },


      //测试
      setup(props,context){
        // console.log('---setup---',this);
        console.log(props);
        // console.log(context);
        // console.log(context.attrs); //相当于vue2中的this.$attrs
        // console.log(context.emit); //触发自定义事件，相当于vue2中的this.$emit
        console.log(context.slots); //插槽

        //数据
        let person = reactive({
          name:'王五',
          age:18,
        })
        
        function test() {  
            context.emit('hello',666)
        }

        //返回一个对象（常用
        return{
            person,
            test
        }
      }
    }
  
  </script>
  
  