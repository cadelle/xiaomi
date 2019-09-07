;(function(){

    "use strict";

    class Account{
        constructor(){
            //获取输入框
            this.account = document.getElementById("account");
            this.password = document.getElementById("password");
            //获取登录按钮
            this.btn = document.getElementById("land");
            //定义账号密码变量用来保存获取得值；
            this.acc;
            this.pass;
            this.get();
            this.land();
          
        }






        get(){
            
            var that = this;
      





            //监听账号输入框
            this.account.addEventListener("blur",function(){
                that.acc = that.account.value;
            
            });

            //监听密码输入框
            this.password.addEventListener("blur",function(){
                that.pass = that.password.value;
                
                });

        }
        //登录
        land(){
            var that = this;
            this.btn.addEventListener("click",function(){
                that.test();
            }

            );
        }

        //验证账户密码；
        test(){
            console.log(window.localStorage.getItem(this.acc));
            if(window.localStorage.getItem(this.acc) == null){
                alert("账号不存在");
            }else{
                var local = window.localStorage.getItem(this.acc).split(",");
                if(local[0] == this.pass){
                    alert("登陆成功");
                    // 将该账户的状态改为true
                    window.localStorage.setItem("true",[this.acc,local[0],local[1],local[2]]);
                    //跳转页面
                    window.location.href = "http://localhost/miphone/index.html";
                }else{
                    alert("密码错误");
                }
               
            }
  



        }


    }
    
    new Account();
















})();