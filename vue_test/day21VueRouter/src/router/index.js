//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },        
        {
            path:'/home',
            component:Home,
        },
    ]
})