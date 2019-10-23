//声明XMLHttpRequest对象
var xmlHttp_request=null;
//创建XMLHTTPRequest对象实例的方法
function createXHR(){
    try{
        xmlHttp_request=new XMLHttpRequest();
    }
    catch(e1){
        var _msxmlhttp=new Array("Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0",
            "Msxml2.XMLHTTP.4.0","Msxml2.XMLHTTP.3.0",
            "Msxml2.XMLHTTP","Microsoft.XMLHTTP");
        for(var i=0;i<_msxmlhttp.length;i++){
            try{
                xmlHttp_request=new ActiveXObject(_msxmlhttp[i]);
                if(xmlHttp_request!=null){
                    break;
                }
            }
            catch(e2){}
        }
    }
    if(xmlHttp_request==null){
        alert("不能创建Ajax对象！");
    }
}
//发送客户端的请求，该方法有4个参数，其中method取值为POST或GET
function sendRequest(url,params,method,handler){
    createXHR();
    if(!xmlHttp_request)
        return false;
    xmlHttp_request.onreadystatechange=handler; //指定响应函数为handler
    if(method=="GET"){
        xmlHttp_request.open(method,url+'?'+params,true);
        xmlHttp_request.send(null);
    }
    if(method=="POST"){
        xmlHttp_request.open(method,url,true);
        xmlHttp_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlHttp_request.send(params);
    }
}
