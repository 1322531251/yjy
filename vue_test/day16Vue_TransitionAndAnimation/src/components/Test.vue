<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="move" appear>
        <h1 v-show="isShow">你好</h1>
    </transition>
</div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: orange;
    }

    .move-enter-active{
        animation: move 1s;
    }

    .move-leave-active{
        animation: move 1s reverse;
    }

    @keyframes move {
         from{
            transform: translateX(-100%);
         }to{
            transform: translateX(0px);

         }
    }
</style>