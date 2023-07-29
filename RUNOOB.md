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