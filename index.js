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

myDiv.removeEventListener('click',function(){},false)//����ɾ��û��Ч������Ϊ�������� �����Ͳ�֪�����ĸ�����

var handle = function(){
    alert('...');
}
myDiv.addEventListener('click',handle,false);
myDiv.removeEventListener('click',handle,false)//����ɾ�����Գɹ���
//ɾ���¼�Ҫ�Ͱ��¼������� ���������� �Ƿ�ð�� ����һ�²ſ�����Чɾ��


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














