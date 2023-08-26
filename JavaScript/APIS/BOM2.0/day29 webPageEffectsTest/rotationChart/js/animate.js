//     动画函数的使用:
// 1.单独创建一个js文件
function animate(obj,target,callBack){

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer)
    obj.timer = setInterval(function () {  
        // var step = Math.ceil(target - obj.offsetLeft) / 10
        var step = (target - obj.offsetLeft) / 10
        // 点击按钮时，判断步长是正值还是负值
        // 1.如果是正值，则步长往大取整
        // 2.如果是负值，则步长往小取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if(obj.offsetLeft == target){
            clearInterval(obj.timer)
            // if(callBack){
            //     callBack()
            // }
            callBack && callBack()
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    },15)
}