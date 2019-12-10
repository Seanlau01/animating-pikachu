!function(){
    var duration=50
    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let styleTag=document.querySelector('#styleTag')
        let n=0
        let id
        id=setTimeout(function run(){
            n+=1
            container.innerHTML=code.substring(0,n)
            styleTag.innerHTML=code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n<code.length){
               id=setTimeout(run,duration)
            }else{
                fn&&fn.call()
            }
        },duration)
    }

    $('.actions').on('click','button',function(e){
        let $button=$(e.currentTarget)
        let speed=$button.attr('data-speed')
        $button.addClass('active')
           .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration=100
                break   
            case 'normal':
                 duration=50
                break
            case 'fast':
                 duration=10
                 break     
                }
    })
   let code=`
/*先准备画皮卡丘的背景色*/
.preview {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFE600;
}
.wrapper {
    position: relative;
    width: 100%;
    height: 180px;
}
/*开始画皮卡丘的鼻子*/
.nose {
    position: absolute;
    width: 0;
    height: 0;
    border: 11px solid;
    border-radius: 50%;
    border-color: black transparent transparent transparent;
    margin-top: 25px;
    left: 50%;
    margin-left: -11px;
}
/*接着画皮卡丘的眼睛*/
.eye {
    position: absolute;
    width: 48px;
    height: 48px;
    border: 3px solid #000000;
    background: #2E2E2E;
    border-radius: 50%;
}
.eye.left {
    right: 50%;
    margin-right: 66px;
}
.eye.right {
    left: 50%;
    margin-left: 66px;
}
/*然后画皮卡丘的眼珠*/
.eye::before {
    position: absolute;
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border: 3px;
    border-color: #000000;
    background: #FFFFFF;
    border-radius: 50%;
    left: 5px;
    top: 1px;
}
/*然后画皮卡丘的脸*/
.face {
    position: absolute;
    width: 68px;
    height: 68px;
    top: 84px;
    background: #FF0000;
    border-radius: 50%;
    border: 3px solid black;
}
.face.left {
    right: 50%;
    margin-right: 94px;
}
.face.right {
    left: 50%;
    margin-left: 94px;
}
/*然后画皮卡丘的上嘴唇*/
.upperLip {
    position: absolute;
    width: 64px;
    height: 20px;
    background: #FFE600;
    border: 3px solid black;
    margin-top: 42px;

}
.upperLip.left {
    right: 50%;
    transform: rotate(-20deg);
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
}
.upperLip.right {
    left: 50%;
    transform: rotate(20deg);
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
}
/*然后画皮卡丘的下嘴唇*/
.lowerLip-wrapper {
    position: absolute;
    left: 50%;
    margin-left: -130px;
    bottom: 0;
    height: 130px;
    width: 260px;
    overflow: hidden;
}
.lowerLip {
    position: absolute;
    bottom: 0;
    width: 260px;
    height: 3000px;
    border: 3px solid black;
    background: #9B000A;
    border-radius: 200px/2000px;
    overflow: hidden;

}
/*最后画皮卡丘的舌头*/
.lowerLip::after {
    content: '';
    position: absolute;
    bottom: -8px;
    width: 120px;
    height: 120px;
    background: #FC4A62;
    left: 50%;
    margin-left: -60px;
    border-radius: 60px;
}
/*皮卡丘已画完，谢谢观看*/
   `
    writeCode('',code)
}.call()

