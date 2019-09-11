;(function(){
            "use strict";
            //获取当前页面的cookie
            // console.log(document.cookie.split("=")[1]);
            // console.log($(".name").html());
            if($(".name").html()==""){
                class main{
                    constructor(){
                        // this.id = document.cookie.split("=")[1];
                        this.ajxO;
                        this.shuju;
                        this.data();
                        this.body();
                        

                    }
                
                data(){
                    //获取指定name的cookie；
                    var getCookie = function (name) {
                              var arr;
                              var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                              if (arr = document.cookie.match(reg)){
                              return unescape(arr[2]);
                               }else{
                               return null;}
                           };
                     this.id = getCookie("id");
             
                    //  console.log(getCookie("id"));
                    var that = this;
                    ajax({
                        url:"http://localhost/miphone/js/goods.json",
                        success:function(res){
                            that.ajxO = JSON.parse(res);
                            //异步所以采用传参
                            that.diff(that.ajxO);
                            
                        }
                    });
                    
               
                }

                diff(a){
                    var that =this;
                    this.ajxO = a;
                    // console.log(a);
                    //使用find来查找对应ID的数据
                    function getAjx(element){
                    return element.goodsId == that.id;
                }
                    this.shuju = this.ajxO.find(getAjx);
                    this.display();

                }


                //将数据渲染到页面上
                display(){  
                    this.name = document.getElementsByClassName("name");
                    this.img = document.getElementById("shopping_left");
                   
                    this.discrible = document.getElementById("discrible");
                    this.type = document.getElementById("type");
                    this.color= document.getElementById("color");
                    this.news = document.getElementById("news");

                    this.price = document.getElementById("price");
                    this.name[0].innerHTML = (this.shuju.name);
                    this.name[1].innerHTML = (this.shuju.name);
                    
                    this.img.style.background = "url("+this.shuju.url+") no-repeat ";
                    $("#big_pic").attr("src",this.shuju.url);
                    this.img.style.backgroundSize = "100%";
                    this.discrible.innerHTML = this.shuju.discrible;
                    this.price.innerHTML = this.shuju.price;
                    var a = this.shuju.type.split(",");
                    var b = this.shuju.color.split(",");
                  

                    for(var i = 0;i<a.length;i++){
                        var span = document.createElement("span");
                        this.type.append(span);  
                        this.type.childNodes[i].innerHTML = a[i];  
                    }

                    for(var i = 0;i<b.length;i++){
                        var span = document.createElement("span");
                        this.color.append(span);  
                        this.color.childNodes[i].innerHTML = b[i];  
                      
                    }
                    this.news.childNodes[0].innerHTML = this.shuju.send;
                }


                body(){
                    var that = this;
                    var type;
                    var color;
                    $("#type span").attr("stu",false);
                    $("#type").click(function(eve){
                        var e = eve || window.event;
                        var target = e.target || e.srcElement; 
                        type = target.innerHTML;
                        $("#type span").css({"border":"1px solid #000"});
                        // console.log(type);
                        if(target.stu == false){
                            $(target).css({"border":"1px solid #000"});
                            target.stu == true;
                        }else{
                            $(target).css({"border":"1px solid red"});
                        }
                        type = target.innerHTML;
                        if(color!=undefined){
                            $("#go").html("实付"+that.shuju.price+"￥");
                        }
                    
        
                    })
                    $("#color span").attr("stu",false);
                    $("#color").click(function(eve){
                        var e = eve || window.event;
                        var target = e.target || e.srcElement; 
                        color = target.innerHTML;
                        $("#color span").css({"border":"1px solid #000"});
                        // console.log(type);
                        if(target.stu == false){
                            $(target).css({"border":"1px solid #000"});
                            target.stu == true;
                        }else{
                            $(target).css({"border":"1px solid red"});
                        }
                        // console.log(type,color);
                        if(type!=undefined){
                            $("#go").html("实付"+that.shuju.price+"￥");
                        }
                        
                    })
                 
                    $("#add").click(function(){
                        if(color!=undefined&&type!=undefined){
                    
                        var user = localStorage.getItem("true");
                        var goodsId = that.id;
                        if(localStorage.getItem("shopping")==null){
                            window.localStorage.setItem("shopping",[goodsId,type,color]);
                        }else{
                         
                            window.localStorage.setItem("shopping",[ window.localStorage.getItem("shopping")+"/"+goodsId,type,color]);
                        }
                          
                            
                       
                        // window.location.href = "http://localhost/miphone/car.html";
                        }else{
                            alert("请填写正确信息");
                        }
                        
                       



                    });








                }






            }
             new main();
        
            //商品详情勾选类型
           
            
        }

               









           


















})();