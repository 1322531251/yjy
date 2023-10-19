//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About,
        },        
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },                
                {
                    path:'message',
                    component:Message,
                },
            ]
        },
    ],
})