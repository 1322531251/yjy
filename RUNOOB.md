# Extend
### 1.关键字 
    let、var、function、if、else、switch、case、break
### 2.保留字
    int、short、long、char
### 3.标识（标识符
    变量名、函数名的另一种说法
### 4.表达式
    10+3、age>=18
### 5.语句
    if()、for()

### 6.基本数据类型和引用数据类型
    1）简单类型又叫做基本数据类型或者值类型 （存储的是值本身，例如：string、number、boolean、undefined、null
    2）复杂类型又叫做引用类型（存储的是地址，例如通过new关键字创建的对象Object、Array、Date



# Size And Position

| 属性 | 作用 | 说明 |
| ----------- | ------ | ------------------------- |
|scrollLeft、scrollTop|被卷去的头部和左侧|配合页面滚动来用，可读写|
|clientWidth、clientHeight|获得元素宽度和高度|不包含border、margin、滚动条。用于js获取元素大小，只读属性|
|offsetWidth、offsetHeight|获取元素宽度和高度|包含border、padding、滚动条等，只读属性|
|offsetLeft、offsetTop|获取元素距离自己定位父级元素的左、上距离|获取元素位置的时候使用，只读属性|



# Date

| 方法 | 作用 | 说明 |
| ----------- | ------ | ------------------------- |
|getFullYear()|获得年份|获取四位年份|
|getMonth()|获得月份|取值0-11|
|getDate()|获取月份中的每一天|不同月份取值也不相同|
|getDay()|获取星期|取值0-6|
|getHours()|获取小时|取值0-23|
|getMinutes()|获取分钟|取值0-59|
|getSeconds()|获取秒|取值0-59|

## 转换公式
    d = parseInt(总秒数 / 60 / 60 / 24)  //计算天数
    h = parseInt(总秒数 / 60 / 60 % 24)  //计算小时
    m = parseInt(总秒数 / 60 % 60)  //计算分数
    s = parseInt(总秒数 % 60)  //计算当前秒数


# 扩展-JS垃圾回收机制

## 堆栈空间分配区别
    1.栈（操作系统）：由操作系统自动分配释放函数的参数值、局部变量等，基本数据类型放到栈里面
    2.堆（操作系统）：一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收，复杂数据类型放在堆里面



# 函数参数
## 剩余参数与动态参数的区别
    ...是语法符号，置于最末函数形参之前，用于获取多余的实参
    借助...获取的剩余实参，是个真数组

## 剩余参数和展开运算符的区别
    ...剩余运算符：函数参数使用，得到真数组
    ...展开运算符：数组中使用，数组展开




# 构造函数四大步骤


    1.创建新的空对象
    2.构造函数this指向新对象
    3.执行构造函数代码，修改this，添加新的属性
    4.返回新对象


# 编程思想

## 面向过程编程
    面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用

## 面向对象编程（oop）
    面向对象是把事务分解成为一个个对象，然后由对象之间分工与合作
    具有灵活、代码可复用、容易维护和开发的优点

#### 面向对象的特征
    1.封装性
    2.继承性
    3.多态性 


| |面向过程编程 | 面向对象编程 |
| ----------- | ------ | ------------------------- |
|优点|性能比面向对象高，适合跟硬件联系很紧密的东西，例如单片机|易维护、易复用、易扩展，由于面向对象有封装、继承、多态性的特征，可以设计出低耦合的系统，使系统更加灵活、更加易于维护
缺点|没有面向对象易维护、易复用、易扩展| 性能比面向过程低 | 



# 原型链查找规则

    1.当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性
    2.如果没有就查找它的原型（也就是__proto__指向的prototype原型对象）
    3.如果还没有就查找原型对象的原型（Object的原型对象）
    4.依次类推一直找到Object为止（null）
    5.__proto__对象原型的意义就在于为对象成员查后object找机制提供一个方向，或者说一条路线
    6.可以使用instanceof运算符用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上


# 深拷贝

    1.用到函数递归
    2.普通拷贝直接赋值，遇到数组、对象再次调用函数递归
    3.先array后object



# 性能优化（防抖和节流）

性能优化|说明|使用场景
| ----------- | ------ | ------------------------- |
防抖|单位时间内，频繁触发事件，只执行最后一次|搜索框搜索输入、手机号，邮箱输入检测
节流|单位时间内，频繁触发事件，只执行一次|高频事件：鼠标移动mousemove、页面尺寸缩放resize、滚动条滚动scroll等等



# API（应用程序编程接口）

    概念：
    一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节。
# Web API
    概念：
    浏览器提供的一套操作浏览器功能和页面元素的API（BOM和DOM）


# 常见的鼠标事件
鼠标事件|触发条件
| ----------- | ------ | ------------------------- |
onclick|鼠标点击左键触发
onmouseover|鼠标经过触发
onmouseout|鼠标离开触发
onfocus|获得鼠标焦点触发
onblur|失去鼠标焦点触发
onmousemove|鼠标移动触发
onmouseup|鼠标弹起触发
onmousedown|鼠标按下触发



# 事件对象的常见属性和方法

事件对象属性方法|说明
| ----------- | ------ | ------------------------- |
e.target|返回触发事件的对象（标准
e.srcElment|返回触发事件的对象（非标准 IE6-8使用
e.type|返回事件的类型 比如click，mousemove 不带on
e.canceIBubble|该属性阻止冒泡（非标准 IE6-8使用
e.returnValue|该属性阻止默认事件 （非标准 IE6-8使用 比如不让链接跳转
e.preventDefault()|该属性阻止默认事件 （标准 比如不让链接跳转
e.stopPropagation()|阻止冒泡 标准

#### 注：e.target返回的是触发事件的对象（元素），this返回的是绑定事件的对象（元素）




#  鼠标事件对象

鼠标事件对象|说明
| ----------- | ------ | ------------------------- |
e.clientX|返回鼠标相对于浏览器窗口可视区的X坐标
e.clientY|返回鼠标相对于浏览器窗口可视区的Y坐标
e.pageX|返回鼠标相对于文档页面的X坐标 IE9+支持
e.pageY|返回鼠标相对于文档页面的Y坐标 IE9+支持
e.screenX|返回鼠标相对于电脑屏幕的X坐标
e.screenY|返回鼠标相对于电脑屏幕的Y坐标

# 键盘事件

键盘事件|触发条件
| ----------- | ------ | ------------------------- |
onkeyup|某个键盘按键被松开时触发
onkeydown|某个键盘按键被按下时触发
onkeypress|某个键盘按键被按下时触发 （但不识别功能键，比如ctrl shift 箭头等


# DOM

文档对象模型
DOM就是把 文档 当做一个 对象 来看待
DOM的顶级对象是document
DOM主要学习的是操作页面元素
DOM是W3C标准规范

# BOM

浏览器对象模型
把 浏览器 当做一个 对象 来看待
BOM的顶级对象是window
BOM学习的是浏览器窗口交互的一些对象
BOM是浏览器厂商再各自浏览器上定义的，兼容性较差


# URL
组成|说明
| ----------- | ------ | ------------------------- |
protocol|通信协议 常用的http，ftp，maito等
host|主机（域名）
port|端口号 可选，省略时使用方案的默认端口 如http的默认端口为80
path|路径 由零或多个‘/’符号隔开的字符串，一般用来表示主机上的一个目录或文件地址
query|参数 以键值对的形式通过&符号分隔开来
fragment|片段 #后面内容常见于链接锚点

## location
location对象属性|返回值
| ----------- | ------ | ------------------------- |
location.href|获取或设置整个URL
location.host|返回主机（域名）
location.port|返回端口号 如果未写返回空字符串
location.pathname|返回路径
location.search|返回参数
location.hash|返回片段 #后面内容 常见于链接锚点

location对象方法|返回值
| ----------- | ------ | ------------------------- |
location.assign()|跟href一样，可以跳转页面（也称为重定向页面
loaction.replace()|替换当前页面，不记录历史，不能后退页面
location.reload()|重新加载页面，相当于刷新按钮或者F5如果参数为true强制刷新ctrl+F5

## history
history对象方法|作用
| ----------- | ------ | ------------------------- |
back()|可以后退功能
forward()|前进功能
go(参数)|前进后退功能 参数如果是1 前进1个页面 如果是-1 后退1个页面


# offset
offset系列属性|作用
| ----------- | ------ | ------------------------- |
element.offsetParent|返回作为该元素带有定位的父级元素 如果父级都没有定位则返回body
element.offsetTop|返回元素相对带有父元素上方的偏移
element.offsetLeft|返回元素相对带有定位父元素左边框的偏移
element.offsetWidth|返回自身包括padding、边框、内容区的宽度，返回数值不带单位
element.offsetHeight|返回自身包括padding、边框、内容区的高度，返回数值不带单位

## offset与style区别

### offset
    offset可以得到任意样式表中的样式值
    offset系列获得的数值是没有单位的
    offsetWidth包含padding+border+width
    offsetWidth等属性，只能获取不能赋值

    注：所以，我们想要获取元素大小位置，用offset更合适


### style
    style只能得到行内样式表中的样式值
    style.width获得的是带有单位的字符串
    style.width获得不包含padding和border的值
    style.width的可读写属性，可以获取也可以赋值

    注：所以，我们想要给元素更改值，则需要用style改变


# client

client系列属性|作用
| ----------- | ------ | ------------------------- |
element.clientTop|返回元素上边框的大小
element.clientLeft|返回元素左边框的大小
element.clientWidth|返回自身包括padding、不含边框、内容区的宽度，返回数值不带单位
element.clientHeight|返回自身包括padding、不含边框、内容区的高度，返回数值不带单位

# scroll

scroll系列属性|作用
| ----------- | ------ | ------------------------- |
element.scrollTop|返回被卷去的上侧距离，返回数值不带单位
element.scrollLeft|返回被卷去的左侧距离，返回数值不带单位
element.scrollWidth|返回自身实际的宽度，不含边框、返回数值不带单位
element.scrollHeight|返回自身实际的高度，不含边框、返回数值不带单位

# offset client scroll 区别

    offset系列经常用于获取元素位置 offsetTop、offsetLeft
    client经常用于获取元素大小 clientWidth、clientHeight
    scroll经常用于获取滚动距离 scrollTop、scrollLeft

    注：页面滚动距离通过window.pageXOffset获得


# mouseenter和mouseover的区别

    当鼠标移动到元素上时就会触发mouseenter事件

    类似mouseover，它们两者的差别是：
    1.mouseover鼠标经过自身盒子会触发，经过子盒子还会触发，mouseenter只会经过自身盒子触发
    2.mouseenter不会冒泡
    3.mouseenter搭配鼠标离开mouseleave同样不会冒泡



# touch触屏事件
touch事件|说明
| ----------- | ------ | ------------------------- |
touchstart|手指触摸到一个DOM元素时触发
touchmove|手指在一个DOM元素上滑动时触发
touchend|手指从一个DOM元素上移开时触发


# touchEvent触摸事件对象
触摸列表|说明
| ----------- | ------ | ------------------------- |
touches|正在触摸屏幕的所有手指的一个列表
targetTouches（常用|正在触摸当前DOM元素上的手指的一个列表
changedTouches|手指状态发生了改变的列表，从无到有，从有到无变化


# click延时解决方案

解决方案：
1.禁用缩放。浏览器禁用默认的双击缩放行为并去掉300ms的点击延迟
    <meta name = "viewport" content = "user-scalable = no">