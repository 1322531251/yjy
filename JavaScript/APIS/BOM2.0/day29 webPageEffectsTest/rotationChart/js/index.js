window.addEventListener('load',function () {  
    // alert(11)
    // 1.获取元素
    var prev = document.querySelector('.xtx_banner .prev')
    var next = document.querySelector('.xtx_banner .next')
    var banner = document.querySelector('.xtx_banner')
    var bannerWidth = banner.offsetWidth

    banner.addEventListener('mouseenter',function(){
        prev.style.display = 'block'
        next.style.display = 'block'
        clearInterval(timer)
        timer = null
    })
    banner.addEventListener('mouseleave',function(){
        prev.style.display = 'none'
        next.style.display = 'none'
        timer = setInterval(function(){
            next.click()
        },2000)
    })

    var ul = banner.querySelector('ul')
    var ol = banner.querySelector('.indicator')
    for(var i = 0; i < ul.children.length; i++){
        var li = document.createElement('li')
        li.setAttribute('index',i)
        ol.appendChild(li)
        li.addEventListener('click',function () {  
            // 清除所有li的active样式
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = ''
            }
            // 添加给当前li样式
            this.className = 'active'

            var index = this.getAttribute('index')
            num = index
            circle = index
            animate(ul,-index * bannerWidth)
        })
    }
    ol.children[0].className = 'active'

    var first = ul.children[0].cloneNode(true)
    ul.appendChild(first)
    // 按钮功能
    var num = 0
    // 控制小圆圈
    var circle = 0

    // 节流阀
    var flag = true
    // 右按钮
    next.addEventListener('click',function () {  
        if(flag){
            flag = false
        
        if(num == ul.children.length - 1){
            ul.style.left = 0
            num = 0
        }
        num++
        animate(ul, -num*bannerWidth,function () {
            flag = true
        })

        circle++
        if(circle == ol.children.length){
            circle = 0
        }
        // 调用函数
        circleChange()
        }
    })
    // 左按钮
    prev.addEventListener('click',function () {  
        if(flag){
            flag = false
        if(num == 0){
            num = ul.children.length - 1
            ul.style.left = -num * bannerWidth + 'px'
        }
        num--
        animate(ul, -num*bannerWidth,function(){
            flag = true
        })

        circle--
        if(circle < 0){
            circle = ol.children.length - 1
        }
        // 调用函数
        circleChange()
    }

    })
    
    function circleChange(){
        for(var i = 0; i <ol.children.length; i++){
            ol.children[i].className =''
        }
        ol.children[circle].className = 'active'
    }

    var timer = setInterval(function(){
        next.click()
    },2000)
})