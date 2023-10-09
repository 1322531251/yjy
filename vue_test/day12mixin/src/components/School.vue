<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    //引入一个混合
    // import {mixin,mixin2} from '../mixin'
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'School',
        data(){ 
            return{
                name:'黑科技',
                address:'黑龙江',
            }
        },
        // mounted() {
        //     console.log('nihaoa');
        // },
        // mixins:[mixin,mixin2]

    }
    
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: pink;
    }
</style>