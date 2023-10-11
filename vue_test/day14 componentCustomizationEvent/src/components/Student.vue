<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>总和：{{number}}</h2>
        <button @click="add">number++</button>
        <button @click="sendStudentName">把学生名给app</button>
        <button @click="unbind">解绑getStudentName事件</button>
        <button @click="death">销毁绑定事件</button>
    </div>
</template>

<script>
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'Student',
        data(){
            return{
                name:'lili',
                sex:'女',
                number:0
            }
        },
        methods: {
            add(){
                console.log('被调用');
                this.number++
            },
            sendStudentName(){
                //触发student组件实例身上的getStudentName事件
                this.$emit('getStudentName',this.name)
                // this.$emit('demo')
                // this.$emit('click')
            },
            unbind(){
                this.$off('getStudentName')  //解绑一个自定义事件
                // this.$off(['getStudentName','demo'])  //解绑多个自定义事件
                // this.$off()  //解绑全部自定义事件
            },
            death(){
                this.$destroy() //销毁当前Student组件的实例，销毁后student实例的自定义事件全不奏效
            }
        },
    }
    
</script>

<style lang="less">
    .student{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>
 