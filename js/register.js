;(function(){
        "use strict";
        class Reg{
            constructor(){
                this.back = document.getElementById("back");
                this.user = document.getElementById("user");
                this.password = document.getElementById("password");
                this.copy = document.getElementById("copy");
                this.emil = document.getElementById("emil");
                this.nc = document.getElementById("nc");
                this.send = document.getElementById("send");
                //表单提交判断状态
                this.ty1 = document.getElementById("ty1");
                this.ty2 = document.getElementById("ty2");
                this.ty3 = document.getElementById("ty3");
                this.ty4 = document.getElementById("ty4");
                this.ty5 = document.getElementById("ty5");
                //判断强弱效果
                this.iobj = document.getElementById("panduan");
                this.i1 = document.getElementById("i1");
                this.i2 = document.getElementById("i2");
                this.i3 = document.getElementById("i3");
                
        

                this.no();
            }

        no(){
            var that = this;
            //监听关闭按钮实现返回登录页面
            this.back.addEventListener("click",function(){
                window.location.href = "http://localhost/miphone/land.html";

            });

          //用户名输入验证功能
            this.user.addEventListener('blur',fn);
           
            function fn(){
               // 用户名仅支持中文、字母、数字、“-”“_”的组合，4-20个字符
               var reg = /^[\-\w\u4E00-\u9FA5]{4,20}$/;
               if(reg.test(that.user.value)){
                that.ty1.innerHTML ="<img src='./img/6.jpg' class = 'g'>输入正确";
                      that.type1 = true;
                    
               }else{
                that.ty1.innerHTML ="<img src='./img/5.jpg' class = 'g'>输入错误";
                      that.type1 = false;
                    
               }
            }

            //用户密码输入验证和判断功能；
            this.password.onfocus = function(){
        
                that.password.addEventListener('keyup',fn3);
                that.password.addEventListener('blur',fn4);
            }
            function fn3(){
                //强
                //弱
                var reg1 =/[0-9]/;
                var reg2 =/[a-z]/;
                var reg3 =/[A-Z]/;
                var i = 0 ;
                if(reg1.test(that.password.value)){
                   i++;
                }
                 if(reg2.test(that.password.value)){
                   i++;
                }
                 if(reg3.test(that.password.value)){
                    i++;
                }
       
                if(i==3){
                  
                   that.i3.style.background = "greenyellow";
                   that.i2.style.background = "yellow";
                   that.i1.style.background = "red";
                }else if(i==1)
                {   that.i2.style.background = "#efefef";
                    that.i3.style.background = "#efefef";
                    that.i1.style.background = "red";
                }else if(i==2){
                    that.i1.style.background = "red";
                    that.i2.style.background = "yellow";
                    that.i3.style.background = "#efefef";
                    
                }else{
                    that.i1.style.background = "#efefef";
                    that.i2.style.background = "#efefef";
                    that.i3.style.background = "#efefef";
                }
            }

            function fn4(){
                var reg = /^\w{6,12}$/;
                if(reg.test(that.password.value)){
                    that.ty2.innerHTML ="<img src='./img/6.jpg' class = 'g'>输入正确";
                    that.type2 = true;
    
                }else{
                    that.ty2.innerHTML ="<img src='./img/5.jpg' class = 'g'>输入错误";
                    that.type2 = false;
            }
            }
            //重复密码验证
            
            this.copy.addEventListener('blur',fn5);
    
           
    
            function fn5(){
                if(that.password.value==that.copy.value&&that.copy.value!=''){
                    that.ty3.innerHTML ="<img src='./img/6.jpg' class = 'g'>密码输入正确";
                    that.type3 = true;
                }else{
                    that.ty3.innerHTML ="<img src='./img/5.jpg' class = 'g'>密码输入不一致";
                    that.type3 = false;
            
                }
            }

             
            //邮箱设置
        
            this.emil.addEventListener('blur',fn2);
            function fn2(){
                var reg = /^\w{3,12}@\w{2,9}\.[a-zA-Z]{3}$/;
                if(reg.test(that.emil.value)){
                that.ty4.innerHTML ="<img src='./img/6.jpg' class = 'g'>输入正确";
                that.type4 =true;
            }else{
                that.ty4.innerHTML ="<img src='./img/5.jpg' class = 'g'>输入错误";
                that.type4 = false;
            }
            }

            //昵称方法
            this.nc.addEventListener('blur',fn1);

            function fn1(){
                var reg = /^[\a-zA-Z\u4E00-\u9FA5]{2,5}$/;
                if(reg.test(that.nc.value)){
                    that.ty5.innerHTML ="<img src='./img/6.jpg' class = 'g'>输入正确";
                    that.type5 = true;
                }else{
                    that.ty5.innerHTML ="<img src='./img/5.jpg' class = 'g'>输入错误";
                    that.type5 = false;
                }
            }
            



            this.send.onclick = function(){
                if(that.type1==that.type2==that.type3==that.type4==that.type5==true){
                    if(window.localStorage.getItem(that.user.value) == null){
                        window.localStorage.setItem(that.user.value,[that.password.value,that.emil.value,that.nc.value]);
                        alert("注册成功");
                        window.location.href = "http://localhost/miphone/land.html";


                    }else{
                        alert("该账号已被注册请重新输入");

                    }
    
    
                }else{
                    alert('填写错误无法提交');
                }
            }
    






               
               
            











        }




        }

        new Reg();




})();