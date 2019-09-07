// 1.预设函数的执行方式，和要传入的参数，及要实现的功能
// ajax({
//     type:"get",             //可选，默认get
//     url:"",                 //必选
//     success:function(){},   //必选
//     error:function(){},     //可选，默认不处理
//     data:{}                 //可选，默认不发
//     timeout:毫秒数          //可选，默认500，延迟时间，超出时间，错误，主要用在jsonp身上
// })

function ajax(options){
    // 2.解析参数，处理默认参数
    let {type,url,success,error,data,timeout} = options;
    type = type || "get";
    data = data || {};
    timeout = timeout || 500;
    // 3.解析要发送的数据
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    // 4.根据发送方式处理url
    // J1.处理url和数据
    if(type == "get" || type == "jsonp"){
        var d = new Date();
        url = url + "?" + str + "__qft=" + d.getTime();
    }
    
    // J2.区分jsonp和ajax的功能
    if(type === "jsonp"){
        var script = document.createElement("script");
        script.src = url;
        document.body.appendChild(script);

        window[data[data.columnName]] = function(res){
            success && success(res);
            error = null;
        }
        
        // J3.jsonp的失败(超时)
        setTimeout(() => {
            error && error("timeout");
            success = null;
        }, timeout);
    }else{
        // 5.开启ajax
        var xhr = new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                success(xhr.responseText);
            }else if(xhr.readyState == 4 && xhr.status != 200){
                // 6.首先保证ajax的过程结束了，如果http给失败，才是真正的失败
                error && error(xhr.status);
            }
        }
        // 7.根据发送方式，决定发送的信息
        if(type == "get"){
            xhr.send();
        }else if(type == "post"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(str.slice(0,str.length-1));
        }
    }
}
