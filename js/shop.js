;(function(){
            "use strict";
            //获取当前页面的cookie
            // console.log(document.cookie.split("=")[1]);
            // console.log($(".name").html());
            if($(".name").html()==""){
                class main{
                    constructor(){
                        this.id = document.cookie.split("=")[1];
                        this.ajxO;
                        this.shuju;
                        this.data();
                        

                    }
                
                data(){
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
                    this.img.style.backgroundSize = "100%";
                    this.discrible.innerHTML = this.shuju.discrible;
                    this.price.innerHTML = this.shuju.price;
                    var a = this.shuju.type.split(',');
                    var b = this.shuju.color.split(',');
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

                }







            }
                new main();
            
         



        }

               









           


















})();