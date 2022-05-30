canvas = document.getElementById("canvass");
ctx = canvas.getContext("2d");

color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2 ; 
ctx.arc(200 , 200 , 40 , 0 , 2*Math.PI);
ctx.stroke();
 canvas.addEventListener("mousedown" , mousedown_1);

function mousedown_1(e){
mousex = e.clientX - canvas.offsetLeft ; 
mousey = e.clientY - canvas.offsetTop ; 
console.log("x = " + mousex + " y = " + mousey);
circle(mousex , mousey);

}
function circle(mousex , mousey){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2 ; 
ctx.arc(mousex , mousey , 40 , 0 , 2*Math.PI);
ctx.stroke();
}

