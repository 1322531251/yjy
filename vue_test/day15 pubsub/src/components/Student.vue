<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'Student',
        data(){
            return{
                name:'lili',
                sex:'女',
            }
        },
        mounted() {
            // console.log('Student',this.x); 
            // this.x.$on('hello',(data) => {
            //     console.log('我是Student组件',data);
            // })
        },
        methods:{
            sendStudentName(){
                pubsub.publish('hello',99)
            }
        }
    }
    
</script>

<style lang="less">
    .student{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>
 