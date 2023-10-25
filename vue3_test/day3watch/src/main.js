//引入的不再是Vue构造函数，引入的是叫createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'


//创建应用实例对象-app(类似于Vue2中的vm，但app比vm更轻)
// createApp(App).mount('#app')
const app = createApp(App)

//挂载
app.mount('#app')
