<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div class="school">
        <h2 >学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">把学校名给app</button>
    </div>
</template>

<script>
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'School',
        data(){ 
            return{
                name:'黑科技',
                address:'黑龙江',
            }
        },
        props:['getSchoolName'],
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        },
    }
    
</script>

<style scoped>
    /* 组件的样式 */
    .school{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>