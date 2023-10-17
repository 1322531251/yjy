// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件VueResource
import VueResource from 'vue-resource'

// 关闭生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(VueResource)

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})

