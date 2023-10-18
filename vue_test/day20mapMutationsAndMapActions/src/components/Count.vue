<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <h3>当前求和放大10倍为：{{bigSum}}</h3>
        <h3>我在{{school}}，学习{{subject}}</h3>
        <select v-model="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时+</button>
        <button @click="incrementWait(n)">等一会再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Count',
        data() {
            return {
                n:1, //用户选择的数字     
            }
        },
        computed:{
            //借助mapState生成计算属性，从state中读取数据（对象写法）
            // ...mapState({
            //     sum:'sum',
            //     school:'school',
            //     subject:'subject',
            // }),
            //借助mapGetters生成计算属性，从state中读取数据（对象写法）
            // ...mapGetters({bigSum:'bigSum'})


            //借助mapState生成计算属性，从state中读取数据（数组写法）
            ...mapState(['sum','school','subject']),
            //借助mapGetters生成计算属性，从state中读取数据（数组写法）
            ...mapGetters(['bigSum'])

        },
        methods: {
            // increment(){
            //     this.$store.commit('Add',this.n)
            // },
            // decrement(){
            //     this.$store.commit('Reduce',this.n)
            // },

            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（对象写法）
            ...mapMutations({
                increment:'Add',
                decrement:'Reduce'
            }),
            //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations（数组写法）
            // ...mapMutations(['Add','Reduce']),

            // incrementOdd(){
            //     this.$store.dispatch('addOdd',this.n)
            // },
            // incrementWait(){
            //     this.$store.dispatch('addWait',this.n)
            // },

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（对象写法）
            // ...mapActions({
            //     incrementOdd:'addOdd',
            //     incrementWait:'addWait'
            // })  

            //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
            ...mapActions([
                'addOdd',
                'addWait'
            ])
        },
        mounted() {

        },
    }
</script>

<style>
    button{
        margin-left: 5px;
    }
</style>