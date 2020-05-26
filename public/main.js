let canvas;
let ctx;
let drawing = true;
let mousePos = { x:0, y:0 };




function onload(){
   // alert("draw your fantasy here, in the gray rectangle");

document.getElementById("pencil").addEventListener('click',pencilClick);
document.getElementById("eraser").addEventListener('click',eraserClick);
   
     canvas = document.getElementById('painter');
     ctx = canvas.getContext('2d');

     ctx.lineWith = 2;
     ctx.strokeStyle = 'azure';
     

     canvas.addEventListener("touchstart", function (e) {
        var rect = canvas.getBoundingClientRect();
     
        mousePos.x = e.touches[0].clientX-rect.left;
        mousePos.y = e.touches[0].clientY-rect.top;
     },false);

     canvas.addEventListener('touchend', function(e) {

     },false);

     canvas.addEventListener("touchmove", function (e) {
        var rect = canvas.getBoundingClientRect();
     
        let x = e.touches[0].clientX-rect.left;
         let y = e.touches[0].clientY-rect.top;


       moveOn(x,y);

        mousePos.x= x;
        mousePos.y =y;
     },false);
}

function pencilClick(){
    drawing =true;
}

function eraserClick(){
    drawing=false;
}

function setBlack(){
    ctx.strokeStyle = 'black';
}

function moveOn(x,y){
    if(drawing){
        ctx.moveTo(mousePos.x, mousePos.y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }else{
        ctx.clearRect(x,y,25,25);
    }
}

function setColoringImage(img){
    var canvas = document.getElementById('painter');
    canvas.style.backgroundImage =  "url('"+img.src+"')";
}

function clearCanvas(){
    var canvas = document.getElementById('painter');
    canvas.style.backgroundImage =  "url('')";
    canvas.style.backgroundColor =  "gray";
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);

}


