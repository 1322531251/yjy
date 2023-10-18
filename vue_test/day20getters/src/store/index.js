//用于创建vuex中store
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
//准备actions 用于响应组件中的动作
const actions = {
    // add(context,value){
    //     context.commit('Add',value)
    // },    
    // reduce(context,value){
    //     context.commit('Reduce',value)
    // },
    addOdd(context,value){
        if(context.state.sum % 2){
            context.commit('AddOdd',value)
        }
    },      
    addWait(context,value){
        setTimeout(()=>{
            context.commit('AddWait',value)
        },500)
    },  
}

//准备mutations 用于操作数据（state）
const mutations = {
    Add(state,value){
        state.sum += value
    },    
    Reduce(state,value){
        state.sum -= value
    },
    AddOdd(state,value){
        state.sum += value
    },      
    AddWait(state,value){
        state.sum += value
    },  
}

//准备state 用于存储数据（state）
const state = {
    sum:0, //当前和
}

//准备state 用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})
