;(function(){
    "use strict";
    window.onload = function(){
       $("#shopping_left").mouseenter(function(){
       
        
            $("#move").css({"display":"block"});
            $("#fangda").css({"display":"block"});
            });

        $("#shopping_left").mouseleave(function(){
        $("#move").css({"display":"none"});
        $("#fangda").css({"display":"none"});
        });


        $("#shopping_left").mousemove(function(e){
                var e = event || window.event;
                var mouseX = e.clientX;
                var mouseY = e.clientY;
                var big = document.getElementById('fangda');
                var small = document.getElementById('shopping_left');
                var look = document.getElementById('big_pic');
                var move = document.getElementById("move");
                var moveLeft = mouseX-(move.offsetWidth/2)-this.offsetLeft;
                var moveTop = mouseY-(move.offsetHeight/2)-this.offsetTop+document.documentElement.scrollTop;

                moveLeft = moveLeft < 0 ? 0 : moveLeft;
                moveTop = moveTop < 0 ? 0 : moveTop;
                moveLeft = moveLeft > this.offsetWidth - move.offsetWidth ?  moveLeft > this.offsetWidth - move.offsetWidth : moveLeft;
                moveTop = moveTop > this.offsetHeight - move.offsetHeight ?  moveTop > this.offsetHeight- move.offsetHeight : moveTop;
                $("#move").css({"left":moveLeft,"top":moveTop});

                var imgx = moveLeft/(small.offsetWidth-move.offsetWidth)*(big.offsetWidth-look.offsetWidth);
                var imgy = moveTop/(small.offsetHeight-move.offsetHeight)*(big.offsetHeight-look.offsetHeight);
                look.style.top = imgy+'px';
                look.style.left = imgx+'px';
                // document.body.onscroll = function(){
                //     //获取滚动条高度
                //     // console.log(document.documentElement.scrollTop);
                //     var scrol = document.documentElement.scrollTop;
                   
                //     move.style.top = moveTop+scrol+'px';

                // }


       })





    }
       
})()