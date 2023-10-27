# vue3_test
# 常用Composition API
## ref函数
    1.作用：定义一个响应式的数据
    2.语法：const xxx = ref(initValue)
        创建一个包含响应式数据的引用对象（reference对象，简称ref对象
        JS中操作数据：xxx.value
        模板中读取数据：不需要value，直接:<div>{{xxx}}</div>
    ps:
        接收的数据可以是：基本类型，也可以是对象类型
        基本类型的数据：响应式依然是靠Object.defineProperty()的get和set完成的
        对象类型的数据：内部“求助”了Vue3.0中的一个新函数————reactive函数

## reactive函数
    1.作用：定义一个对象类型的响应式数据（基本类型用ref
    2.语法：const 代理对象 = reactive(源对象)接收一个对象（或者数组），返回一个代理对象（Proxy的实例对象，简称proxy对象）
    3.reactive定义的响应式数据是“深层次的”
    4.内部基于ES6的proxy实现，通过代理对象操作源对象内部数据进行操作

## vue2.x的响应式
    实现原理：
        对象类型：通过Object.defineProperty()对属性的读取，修改进行拦截（数据劫持
        数组类型：通过重写更改数组的一系列方法来实现拦截。（对数组的变更方法进行了包裹
            Object.defineProperty(data,'count',{
                get(){}
                set(){}
            })
    存在问题：
        新增属性、删除属性，界面不会更新
        直接通过下标修改数组，界面不会自动更新

    //#region 
    已注掉的内容 
    //#endregion

## vue3的响应式
    实现原理：
        通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写，属性的添加，属性的删除等
        通过Reflect（反射）：对被代理对象的属性进行操作
            new Proxy(person,{
                //读取时调用
                get(target,propName){
                    console.log(`读取${propName}属性`);
                    return target[propName]
                },
                //修改/添加时调用
                set(target,propName,value){
                    console.log(`修改${propName}属性`);
                    target[propName] = value
                },
                //删除时调用
                deleteProperty(target,propName){
                    console.log(`删除${propName}属性`);
                    return delete target[propName]
                }
            }) 

## reactive对比ref
    1.从定义数据角度对比：
        ref用来定义：基本类型数据
        reactive用来定义：对象（或数组）类型数据
        ps：ref也可以用来定义对象（或数组）类型数据，它内部会自动通过reactive转为代理对象
    2.从原理角度对比：
        ref通过Object.defineProperty()的get和set来实现响应式（数据劫持）
        reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据
    3.从使用角度对比：
        ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value
        reactive定义的数据：操作数据与读取数据：均不需要.value

## setup的两个注意点
    setup执行时机
        在beforeCreate之前执行一次，this是undefined
    setup参数
        props：值为对象，包含：组件外部传递过来，且组件内部声明接受了的属性
        context：上下文对象
            attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs
            slots：收到的插槽内容，相当于this.$slots
            emit：分发自定义事件的函数，相当于this.$emit

## 计算属性与监视
###    1.computed函数
            与vue2.x中computed配置功能一致
                import {reactive,computed} from 'vue'
                setup(){
                    let person = reactive({
                        firstName:'张',
                        lastName:'三',
                    })


                    //计算属性
                    // person.fullName = computed(()=>{
                    //   return person.firstName + '-' + person.lastName
                    // })

                    person.fullName = computed({
                        get(){
                            return person.firstName + '-' + person.lastName
                        },
                        set(value){
                            const nameArr = value.split('-')
                            person.firstName = nameArr[0]
                            person.lastName = nameArr[1]
                        }
                    })
                },

###    2.watch函数
            与vue2.x中watch配置功能一致
            ps：
                监视reactive定义的响应式数据时：oldValue无法正确获取，强制开启了深度监视（deep配置失效
                监视reactive定义的响应式数据中某个属性时：deep配置有效
                    //1.监视ref定义的一个响应式数据
                    // watch(sum,(newValue,oldValue)=>{
                    //   console.log('sum变了',newValue,oldValue);
                    // },{immediate:true})

                    //2.监视ref定义的多个响应式数据
                    // watch([sum,msg],(newValue,oldValue)=>{
                    //   console.log('sum变了',newValue,oldValue);
                    // },{immediate:true})

                    //3.监视reactive定义的一个响应式数据
                        // 1）ps：此处无法正确的获取oldValue
                        // 2）ps：强制开启了深度监视（deep配置无效
                    // watch(person,(newValue,oldValue)=>{
                    //   console.log('person变化了',newValue,oldValue);
                    // },{deep:false})//此处的deep配置无效

                    //4.监视reactive定义的一个响应式数据中的某个属性
                    // watch(()=>person.age,(newValue,oldValue)=>{
                    //   console.log('person中的age变化了',newValue,oldValue);
                    // })

                    //5.监视reactive定义的一个响应式数据中的某些属性
                    // watch([()=>person.age,()=>person.name],(newValue,oldValue)=>{
                    //   console.log('person中的age/name变化了',newValue,oldValue);
                    // })

                    //特殊情况
                    watch(()=>person.job,(newValue,oldValue)=>{
                        console.log('person中的job变化了',newValue,oldValue);
                    },{deep:true}) //此处由于监视的是reactive所定义的对象中的某个属性，所以deep配置有效

###    3.watchEffect函数
            watch的套路是：既要指明监视的属性，也要指明监视的回调
            watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性
            watchEffect与computed：
                但computed注意的计算出来的值（回调函数的返回值），所以必须要写返回值
                而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值
                
            watchEffect(()=>{
                const x1 = sum.value
                const x2 = person.job.j1.salary
                console.log('回调被执行了');
            })

## 生命周期
    beforeCreate ===> setup()
    created ===> setup()
    beforeMount ===> onBeforeMount
    mounted ===> onMounted
    beforeUpdate ===> onBeforeUpdate
    updated ===> onUpdated    
    beforeUnmount ===> onBeforeUnmount
    unmounted ===> onUnmounted

## 自定义hook函数
    本质是一个函数，把setup函数中使用的Composition API进行了封装
    类似于Vue2.x中的mixin
    自定义hook的优势：复用代码，让setup中的逻辑更加清楚易懂

## toRef
    作用：创建一个ref对象，其value值指向另一个对象中的某个属性
    语法：const name = toRef(person,'name')
    应用：要将响应式对象中的某个属性单独提供给外部使用
    扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象，语法：toRefs(person)


# 其他Composition API
## shallowReactive与shallowRef
    shallowReactive：只处理对象最外层属性的响应式（浅响应式）
    shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理
    使用场景：
        如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ===> shallowReactive
        如果有一个对象数据，后续功能不会修改该对象中的属性，而是生新的对象来替换 ===> shallowRef

## readonly与shallowReadonly
    readonly：让一个响应式数据变为只读的（深只读
    shallowReadonly：让一个响应式数据变为只读的（浅只读
    应用场景：不希望数据被修改时

## toRaw与markRaw
    toRaw：
        作用：将一个由reactive生成的响应式对象转为普通对象
        使用场景：用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
    markRaw：
        作用：标记一个对象，使其永远不会再成为响应式对象
        应用场景：
            1.有些值不应该被设置为响应式的，例如复杂的第三方类库等
            2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能
    
## customRef
    作用：创建一个自定义的ref，并对其依赖项跟踪和更新触发进行显式控制
    实现防抖效果：
        <template>
            <div>
                <input type="text" v-model="keyWord">
                <h3>{{keyWord}}</h3>
            </div>
        </template>

        <script>
            import {ref,customRef} from 'vue'

            export default {
                name: 'App',
                setup() {

                //自定义的ref---myRef
                function myRef(value,delay){
                    let timer
                    return customRef((track,trigger)=>{
                        return {
                            get(){
                            console.log('读取数据');
                            track() //通知vue追踪value的变化
                            return value
                            },
                            set(newValue){
                            console.log('修改数据');
                            clearTimeout(timer)
                            timer = setTimeout(()=>{
                                value = newValue
                                trigger()//通知vue重新解析模板
                            },delay)
                            }
                        }
                    })
                }
                // let keyWord = ref('hello') //使用Vue提供的ref
                let keyWord = myRef('hello',500) //使用程序员自定义的ref

                return{
                    keyWord,
                }
            }
        }

        </script>

## provide与inject
    作用：实现祖孙组件间通信
    套路：父组件有一个provide选项来提供数据，子组件有一个inject选项来开始使用这些数据
    具体写法：
        1.祖组件中：
            setup() {
                let car = reactive({
                    name:'奔驰',
                    price:'40W'
                })

                provide('car', car) //给自己的后代组件传递数据

                return{
                    ...toRefs(car)
                }
            }
        2.孙组件中：
            setup() {
                let car = inject('car')
                return {car}
            }