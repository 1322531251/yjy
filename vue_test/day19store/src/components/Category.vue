<template>
    <div class="Category">
        <h3>{{title}}分类</h3>
        <slot :games="games"></slot>
        <!-- 定义一个插槽 -->

        <!-- 默认插槽 -->
        <!-- <slot></slot> -->

        <!-- 具名插槽 -->
        <!-- <slot name="center"></slot>
        <slot name="footer"></slot> -->
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
            // foods:['火锅','烧烤','小龙虾',"牛排"],
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            // films:['《教父》','《拆弹专家》','《你好，李焕英》']
            }
        },
        
    }
</script>

<style>
    .Category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: pink;
    }
    img,video{
        width: 100%;
    }
</style>