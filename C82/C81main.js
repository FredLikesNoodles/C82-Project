canvas = document.getElementById("mycanvas");
 ctx= canvas.getContext("2d");
  color = "red";
 width=3;
radius=3;
 var mouseEvent = "empty";
 var lpx, lpy;
 canvas.addEventListener("mousedown", my_mousedown);
 function my_mousedown(e){
    mouseEvent = "mouseDown";
 }
 canvas.addEventListener("mouseup", my_mouseup);
 function my_mouseup(e){
     mouseEvent = "mouseUp";
 }
 canvas.addEventListener("mouseleave", my_mouseleave);
 function my_mouseleave(e){
     mouseEvent = "mouseLeave";
 }
 canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e){
     cpx = e.clientX - canvas.offsetLeft;
     cpy = e.clientY - canvas.offsetTop;
     
     if(mouseEvent == "mouseDown"){
         ctx.beginPath();
         ctx.strokeStyle = color;
         ctx.lineWidth = width;
         ctx.arc(cpx, cpy, radius, 0, 2*Math.PI);
         ctx.stroke();
     }
     lpx = cpx;
     lpy = cpy;
 }