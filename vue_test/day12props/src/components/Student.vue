<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div>
        <div>
            <h2>学生姓名：{{name}}</h2>
            <h2>学生年龄：{{myAge+1}}</h2>
            <button @click="updateAge">尝试修改收到的年龄</button>
        </div>
    </div>
</template>

<script>
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'Student',
        data(){
            return{
                myAge:this.age
            }
        },
        methods: {
            updateAge() {
                this.myAge++
            },
        },
        //简单声明接收
        // props:["name","age"] 

        // 接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        // }

        // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String, //name的类型是字符串
                requried:true, //name是必要的
            },
            age:{
                type:Number, //age的类型是数值
                default:99, //默认值为99
            }
        }

    }
    
</script>
