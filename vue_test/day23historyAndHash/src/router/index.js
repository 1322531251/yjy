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
 
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


const router = new VueRouter({
    // mode:'hash',
    mode:'history',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:true,title:'关于'}
        },        
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},

                },                
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail/:id/:title',
                            component:Detail,
                            meta:{isAuth:true,title:'详情'},
                            props:true
                        },           
                    ]
                },
            ]
        },
    ],
})

// 组件内路由守卫----初始化时被调用，每次路由切换之后被调用
router.afterEach((to,from)=>{
    document.title = to.meta.title || '系统'    
})

export default router