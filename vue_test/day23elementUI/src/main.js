// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

//完整引入
// //引入ElementUI的组件库
// import ElementUI from 'element-ui';
// //引入ElementUI的全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker } from 'element-ui';

// 关闭生产提示
Vue.config.productionTip = false
//应用ElementUI
// Vue.use(ElementUI)

// Vue.use(Button)
// Vue.use(Row)
// Vue.use(DatePicker) 
// 或写为
Vue.component('aa-button', Button);
Vue.component('aa-row', Row);
Vue.component('aa-date-picker', DatePicker);




new Vue({
    el:'#app',
    render: h => h(App),
})

