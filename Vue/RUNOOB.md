# Vue
    用于构建用户界面的渐进式JavaScript框架
## Vue的特点
    1.采用组件化模式，提高代码复用率，且让代码更好维护
    2.声明式编码，让编码人员无需直接操作DOM，提高开发效率
    3.使用虚拟DOM+优秀的Diff算法，尽量复用DOM节点

# MVVM
    M：模型（Model）：对应data中的数据
    V：视图（View）：模板
    VM：视图模型（ViewModel）：Vue实例对象

# watch对比computed
    1.computed能完成的功能，watch都可以完成
    2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作

    ps：
    1.所被vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象
    2.所有不被vue所管理的函数（定时器的回调函数、ajax的回调函数、promise的回调函数等），最好写成箭头函数，这样this的指向才是vm 或 组件实例对象