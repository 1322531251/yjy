# vue3_test
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
