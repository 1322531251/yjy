// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入插件
import plugins from './plugins'
// 关闭生产提示
Vue.config.productionTip = false
// 使用插件
Vue.use(plugins,1)

new Vue({
    el:'#app',
    render: h => h(App)

})

