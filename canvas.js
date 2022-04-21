let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let pencilColor = document.querySelectorAll(".pencil-color");
let pencilWidthElem = document.querySelector(".pencil-width");
let eraserWidthElem = document.querySelector(".eraser-width");

let penColor = "red";
let eraserColor = "white";
let penWidth = pencilWidthElem.value;
let eraserWidth = eraserWidthElem.value;

let mouseDown = false;

// tool is basically an API jiske through aap apne graphics ko perform karoge
let tool =canvas.getContext("2d");

tool.strokeStyle = penColor; // for changing color
tool.lineWidth = penWidth;
// tool.beginPath(); //ek new graphics(path)(line) create karenge
// tool.moveTo(10,10); // esme 2 ciz hote hai kha se aapko aapke line ki starting karne hai
// tool.lineTo(100, 150); // esme end point define hoga

// //moveTo se lineTo tk ek invisible line bn chuki hogi uske andar color fill karne ke liye stroke use karte hai

// tool.stroke(); //color fill karne ke liye use hota hai

// tool.strokeStyle = "blue";
// tool.beginPath();
// tool.moveTo(10,10)
// tool.lineTo(200,200);
// tool.stroke();

// mousedown -> start new path, mousemove fill (graphics)
canvas.addEventListener("mousedown",function(e){
    mouseDown = true;
    tool.beginPath();
    tool.moveTo(e.clientX, e.clientY);
})
canvas.addEventListener("mousemove",function(e){
   if(mouseDown){
    tool.lineTo(e.clientX,e.clientY);
    tool.stroke();
   }
})
canvas.addEventListener("mouseup",(e)=>{
    mouseDown = false;
})
pencilColor.forEach((colorElem) => {
    colorElem.addEventListener("click",(e)=>{
        let color = colorElem.classList[0];
        penColor = color;
        tool.strokeStyle = penColor;
    })
})
pencilWidthElem.addEventListener("change",(e)=>{
    penWidth = pencilWidthElem.value;
    tool.lineWidth = penWidth;
})
eraserWidthElem.addEventListener("change",(e)=>{
    eraserWidth = eraserlWidthElem.value;
    tool.lineWidth = eraserWidth;
})
eraser.addEventListener("click",(e)=>{
    if(eraserFlag){
        tool.strokeStyle = eraserColor;
        tool.lineWidth = eraserWidth;
    }else{
        tool.strokeStyle = penColor;
        tool.lineWidth = penWidth;
    }
})