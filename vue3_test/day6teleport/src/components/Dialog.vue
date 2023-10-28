<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <teleport to='body' >
        <div v-if="isShow" class="mask"> 
            <div class="dialog">
                <h3>一个弹窗</h3>
                <h4>内容</h4>
                <h4>内容</h4>
                <h4>内容</h4>
                <h4>内容</h4>
                <button @click="isShow = false">关闭弹窗</button>
            </div>
        </div>
    </teleport>
  </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Dialog',
        setup() {
            let isShow = ref(false)
            return {
                isShow
            }
        }
    }
</script>

<style>
    /* 遮罩层 */
    .mask{
        position: absolute;
        top:0;left: 0;bottom: 0;right: 0;
        background-color: rgba(0,0,0,.5);

    }
    .dialog{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: pink;
    }
</style>