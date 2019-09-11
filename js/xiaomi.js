;(function(){
        "use strict";

        $(document).ready(function(){
        //读取本地存储的数据，看是否有状态为ture的账号
         var data = localStorage.getItem("true");
        //  console.log(localStorage.getItem("true"));
        if(data != null){
            data = data.split(",");
            $("#head_landing").html("<img src = './img/2.jpg' title='暂无信息哦~' id='touxiang'><a>"+data[3]+"</a> | <a id='zhuxiao'>注销</a>")
            $("#head_landing img").css({width:"30px",height:"30px",borderRadius:"50%",marginRight:"5px",verticalAlign:"middle"});
          
            //注销功能；
            $("#zhuxiao").on("click",function(){
                localStorage.removeItem("true");
                window.location.href = "http://localhost/miphone/index.html";
            })
            



        }


        //头部购物车
        var time;//用来清除延时器
        $("#head_car").hover(function(){
            //font插件ie8不兼容后期
            // $("#car_content").html("<i class="fa” fa-spinner fa-spin"></i>")
            
            clearTimeout(time);
            $(this).css("background", "#fff");
            $(".head_car_text").css("color", "#ff6700");
            $("#car_content").css({"width":"300px",
            "background":"#fff",
            "border-top":"none",
            "box-shadow": "0 0 2px rgba(0, 0, 0, 0.2)",
            "height":0}).stop(true,true).animate({
                height:"100px"
            },400);
            
            time = setTimeout(function(){
                $("#car_content").html("<p>购物车中还没有商品，赶紧选购吧!</p>")
            },400);
            
        });

        var ajxO;
        //ajax获取json数据
        ajax({
            url:"http://localhost/miphone/js/goods.json",
            success:function(res){
                ajxO = JSON.parse(res);
                // console.log(obj[0]);
                
            }
        });





        $("#head_car").mouseleave(function(){
            //清除购物车中延时器
            clearTimeout(time);
            $("#car_content").html("");
            $(this).css("background", "#424242");
            $(".head_car_text").css("color", "#b0b0b0");
            $("#car_content").css({"width":"300px"}).stop(true,true).animate({
                height:0
            },400);

        
        });

        //logo动画效果
        $("#menu_logo").mouseenter(function(){
            $("#m-logo").css({
                left:13
            }).stop().animate({
                left:$(this).width()
            },120);

            $("#house").css({
                left:-56
            }).stop().animate({
                left:16
            },120);


        })
        //logo图标鼠标离开动画
        $("#menu_logo").mouseleave(function(){
            $("#m-logo").css({
                left:$(this).width()
            }).stop().animate({
                left:13
            },120);

            $("#house").css({
                left:16
            }).stop().animate({
                left:-56
            },120);


        })

        // 鼠标停留house变大特效
        $("#menu_logo").mousedown(function(){
            $("#house").css({
                "transform":"scale(0.85)"
            });
            window.location.href =  "http://localhost/miphone/index.html";
        
        });



        $("#menu_logo").mouseup(function(){
            $("#house").css({
                "transform":"scale(1)"
            });
        });

       //导航栏动画
        $("#airline").mouseenter(function(){
            //当我鼠标进入的时候，第一个li增加padding的宽,来避免快速易懂闪烁BUG；
            $("#xiaomiphone").css({paddingLeft:"215px"});
            $("#menu_nav").css({margin:0});
            $("#dh1").css({height:0}).stop().animate({height:230},300); 
        
        });

        //通过事件委托实现导航栏分类；
        $("#airline").mousemove(function(e){
            var e = e || window.event;
            var target = e.target || e.srcElement;


            //导航栏下拉框函数；
            var air = function(a,b){
                $("#dh1").empty();
            for(var i = a;i<=b;i++){
                $("#dh1").append(`
                <div class="menu_content" goodsId=${ajxO[i].goodsId}>
                    <img src=${ajxO[i].url} id="im1">
                    <p class="menu_content_tit">${ajxO[i].name}</p>
                    <p class="menu_content_price">${ajxO[i].price}</p>
                </div>
                <span class="menu_content_line"></span>`);
            };
            };
            //id位小米
            if(target.id == "xiaomiphone"){
                var a = 0;
                var b = 2;
               air(a,b);
              };


           
           //如果id的名字是红米则执行添加函数
            if(target.id == "hongmiphone"){
              var a = 3;
              var b = 6;
             air(a,b);
            };

             //平板
             if(target.id == "pingban"){
                var a = 7;
                var b = 10;
               air(a,b);
              };
            //电视
            if(target.id == "tv"){
                var a = 11;
                var b = 14;
               air(a,b);
              };
            //路由
            if(target.id == "luyou"){
                var a = 15;
                var b = 15;
               air(a,b);
              };
              

            });
        
        


        $("#menu_nav").mouseleave(function(){
           
            $("#xiaomiphone").css({paddingLeft:0});
            $("#menu_nav").css({marginLeft:"215px"});
           

            $("#dh1").css({height:230}).stop().animate({
                height:0
            },400);
           
        });

        //查找按钮特效
        $("#find_input").focus(function(){
            $("#find_wrap").css("border","1px solid #ff6700");
            $("#find_but").css("border-left","1px solid #ff6700");
        });
        $("#find_input").blur(function(){
            $("#find_wrap").css("border","1px solid #F0F0F0");
            $("#find_but").css("border-left","1px solid #F0F0F0");
        });
       
        $("#find_but").hover(function(){
            $(this).css({"background":"#ff6700",color:"#fff"});
        },function(){
            $(this).css({"background":"#fff",color:"#424242"});
        });


        //商品点击进入商品详情的列表
        $("#dh1").click(function(eve){
            
            var e = eve || window.event;
            var target = e.target || e.srcElement;
        
            // console.log(target.parentNode.getAttribute("goodsId"));
            // var id = target.parentNode.getAttribute("goodsId");
            // //将商品ID存放到cookie里面
            // document.cookie = "id ="+`${id}`+";expires=Tue, 21 Sep 2019 00:19:00 GMT;";
            // console.log(document.cookie);
            
            if(data!=null){
                var id = target.parentNode.getAttribute("goodsId");
                //将商品ID存放到cookie里面
                document.cookie = "id ="+`${id}`+";expires=Tue, 21 Sep 2019 00:19:00 GMT;";
            // window.open("http://localhost/miphone/shoppinglist.html");
            window.location.href = "http://localhost/miphone/shoppinglist.html";
            }else{alert("请先登录");
            window.location.href = "http://localhost/miphone/land.html";
        }
        })

        //购物车点击
        $(".head_car_text").click(function(){
            window.location.href = "http://localhost/miphone/car.html";
        })











        //左侧菜单
        $("#banner_menu_wrap").children().hover(function(){
            $(this).css("background","#ff6700");
            $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
        },function(){
            $(this).css("background","none");
            $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
        })
          // 轮播图实现
        $(function(){
            var i=0;
            var big_banner_pic = $("#big_banner_pic");
            var allimg=$("#big_banner_pic li").length;
            function img_change(){
                var img_i=i*-1226+"px";
                big_banner_pic.animate({opacity:".2"},100,function(){
                    big_banner_pic.css("left",img_i );
                    big_banner_pic.animate({
                        opacity: "1"
                    }, 100);
                });
            };


      
            function automatic(){
                i+=1;
                if(i>=allimg){
                    i=0;
                };
                //执行轮播效果
                img_change();
            };
            var change_self_time = setInterval(automatic, 2000);

            $("#big_banner_change_wrap").hover(function(){
                //进入广告区域暂停轮播图播放
                clearInterval(change_self_time);
                //显示左右箭头
                $("#big_banner_change_wrap").children().show();
            },function(){
                //重新定义计时器
                
                change_self_time = setInterval(automatic, 2000);
                $("#big_banner_change_wrap").children().hide();
            });
            $("#big_banner_change_prev").click(function(){
                i += 1;
                if (i >= allimg) {
                    i = 0;
                };
                img_change();
            });
            $("#big_banner_change_next").click(function(){
                i -= 1;
                if (i <= 0) {
                    i = allimg - 1;
                };
                img_change();
            });
        });
        
      //热门商品添加CSS
        $(function(){
            $("#head_hot_goods_content").children().children().eq(0).css("border-color","#ff7600");
            $("#head_hot_goods_content").children().children().eq(1).css("border-color","red");
            $("#head_hot_goods_content").children().children().eq(2).css("border-color","#adff2f");
            $("#head_hot_goods_content").children().children().eq(3).css("border-color","#6495ed");
            $("#head_hot_goods_content").children().children().eq(4).css("border-color","#6a5acd");
            $("#head_hot_goods_content").children().children().eq(5).css("border-color","#ff7600");
            $("#head_hot_goods_content").children().children().eq(6).css("border-color","red");
            $("#head_hot_goods_content").children().children().eq(7).css("border-color","#adff2f");
            $("#head_hot_goods_content").children().children().eq(8).css("border-color","#6495ed");
            $("#head_hot_goods_content").children().children().eq(9).css("border-color","#6a5acd");
        });








        //实现大米明星单品的左右滑动效果
        $("#head_hot_goods_prave").click(function(){
            $("#head_hot_goods_content").children("ul").animate({
                left:"-1226px"
            },300);
        })
        $("#head_hot_goods_next").click(function(){
            $("#head_hot_goods_content").children("ul").animate({
                left:"0"
            },300);
        })
        $("#head_hot_goods_prave").hover(function(){
            $(this).css("color","#ff6700");
        },function(){
            $(this).css("color","#BEBEBE");
        });
        $("#head_hot_goods_next").hover(function(){
            $(this).css("color","#ff6700");
        },function(){
            $(this).css("color","#BEBEBE");
        });
        //实现智能硬件板块的上下便宜特效
        $(".floor_goods_wrap_li").hover(function () {
            $(this).css({"top":"-5px",
                "box-shadow":"0px 15px 30px rgba(0,0,0,0.2)"
            });
        },function(){
            $(this).css({"top":"0px",
                "box-shadow":"none"
            });
        });

        $(".foot_bottom_r").children("span").hover(function(){
            $(this).css({"background":"#ff6700",color:"#fff"});
        },function(){
            $(this).css({"background":"none",color:"#ff6700"});
        });
    })
    })();