let content = document.querySelector('#content')
let style = document.querySelector('#style')

let contentString = `
/** 你好，即将祭出我的八卦阵
 * 首页准备一个div
*/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 八卦阵启动 */
#div1-wrapper {
    animation: rotate linear infinite  3s;
}
`

let handledString = ''
let n = 0

console.log(window)
let step = (() => { 
    let addString = contentString[n]
    if (addString === '\n') {
        addString = '<br>'
    } else if (addString === ' ') {
        addString = '&nbsp;'
    }
    content.innerHTML += addString
    style.innerHTML = contentString.substring(0, n)
    window.scrollTo(0, 9999999)
    content.scrollTo(0, 9999999)
    if (n < contentString.length - 1) {
        setTimeout(() => {
            n++
            step()
        }, 30)
    }
})

step()