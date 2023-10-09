export default{
    install(Vue,x){
        console.log(x);
        // 全局过滤器
        Vue.filter('mySlice',function (value) {  
            return value.slice(0,4)
        })

        // 全局自定义指令
        Vue.directive('fbind', {
            // 指令与元素成功绑定时
            bind(element,binding){
                element.value = binding.value
            },
            // 指令所在元素被插入页面时
            inserted(element,binding){
                element.focus()
            },
            // 指令所在模板被重新解析时
            updated() {
                element.value = binding.value
            },
        })

        // 定义混入
        Vue.mixin({
            data() {
                return {
                    x:100,
                    y:200
                }
            },
        })

        // 给vue原型上添加一个方法(vm和vc都能使用)
        Vue.prototype.hello = ()=>{alert('hello')}
    }
}