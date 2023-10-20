import Vue from 'vue'

//该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 解决多次点击导航出现报错
Vue.use(VueRouter)
const router = new VueRouter({
  routes: []
})
 
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default new VueRouter({
    routes:[
        {
            name:'guanyu',
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
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail,

                            // props第一种写法，值为对象,该对象中的所有key-value都会以props形式传给Detail组件
                            // props:{a:1,b:'hello'}

                            // props第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件
                            props:true

                            //props第三种写法，值为函数，该函数返回的对象中每一组key-value都会以props形式传给Detail组件
                            // props($route){
                            //     return{id:$route.query.id,title:$route.query.title}
                            // }                            
                            // props({query}){
                            //     return{id:query.id,title:query.title}
                            // }
                        },           
                    ]
                },
            ]
        },
    ],
})