/**
 * Created by L on 2017/9/27.
 */


var myDiv = document.getElementById("myDiv");

myDiv.addEventListener('click',function(){
    alert('hello');
},false)

myDiv.addEventListener('click',function(){
    alert('I will miss you');
},false)

myDiv.removeEventListener('click',function(){},false)//这样删除没有效果，因为匿名函数 根本就不知道是哪个函数

var handle = function(){
    alert('...');
}
myDiv.addEventListener('click',handle,false);
myDiv.removeEventListener('click',handle,false)//这样删除可以成功。
//删除事件要和绑定事件的类型 函数方法名 是否冒泡 保持一致才可以有效删除


var EventUtil = {
    addHandler:function(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler
        }
    },
    removeHandler: function (element,type,handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler,false)
        }else if(element.detachEvent){
            element.detachEvent('on'+type,handler)
        }else{
            element['on'+type] = null;
        }
    }
}














