<!-- 单文件组件 -->
<template>
    <!-- 组件的结构 -->
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    //引入一个混合
    // import {mixin,mixin2} from '../mixin'
    //组件交互相关的代码(数据,方法等等)
    export default{
        name:'Student',
        data(){
            return{
                name:'lili',
                sex:'女',
                x:66

            }
        },
        // mixins:[mixin,mixin2]

    }
    
</script>
