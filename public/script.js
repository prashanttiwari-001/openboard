let img = document.getElementById("myImage");
let optionsFlag = true;
let toolsCont = document.querySelector(".tools-cont");
let pencilToolCont = document.querySelector(".pencil-tool-cont");
let eraserToolCont = document.querySelector(".eraser-tool-cont");
let pencil = document.querySelector(".pencil");
let eraser = document.querySelector(".eraser");
let sticky = document.querySelector(".sticky");
let upload = document.querySelector(".upload");
let pencilFlag = false;
let eraserFlag = false;


img.addEventListener("click",function(){
    // console.log(e);
    optionsFlag =!optionsFlag
    if(optionsFlag){
         if(img.src != "./image/cross.svg"){
            img.src = "./image/2.svg";
            toolsCont.style.display ="flex"};
         } else{
            img.src = "./image/cross.svg"; 
            toolsCont.style.display ="none";
            pencilToolCont.style.display ="none";
            eraserToolCont.style.display ="none";
        }
})

pencil.addEventListener("click",function(){
    pencilFlag =!pencilFlag;
    if(pencilFlag) pencilToolCont.style.display ="block";
    else pencilToolCont.style.display ="none";
})
eraser.addEventListener("click",function(){
    eraserFlag =!eraserFlag;
    if(eraserFlag) eraserToolCont.style.display ="flex";
    else eraserToolCont.style.display ="none";
})
upload.addEventListener("click",function(e){
    // open file explorer
    let input  = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change",(e)=>{
       let file = input.files[0];
       let url = URL.createObjectURL(file);


       let stickyCont = document.createElement("div");
       stickyCont.setAttribute("class","sticky-cont");
       stickyCont.innerHTML =` <div class="header-cont">
                                    <div class="minimize"></div>
                                    <div class="remove"></div>
                               </div>
                                   <div class="note-cont">
                                   <img src ="${url}"/>
                               </div>`;
   
       document.body.appendChild(stickyCont);
   
       let minimize = stickyCont.querySelector(".minimize");
       let remove = stickyCont.querySelector(".remove");
       noteActions(minimize,remove,stickyCont);
   
       stickyCont.onmousedown = function(event,) {
           dragAndDrop(stickyCont,event);
       };
       stickyCont.ondragstart = function() {
           return false;
       };
    })


   



})
sticky.addEventListener("click", function(e){
    let stickyCont = document.createElement("div");
    stickyCont.setAttribute("class","sticky-cont");
    stickyCont.innerHTML =` <div class="header-cont">
                                 <div class="minimize"></div>
                                 <div class="remove"></div>
                            </div>
                                <div class="note-cont">
                                <textarea ></textarea>
                            </div>`;

    document.body.appendChild(stickyCont);

    let minimize = stickyCont.querySelector(".minimize");
    let remove = stickyCont.querySelector(".remove");
    noteActions(minimize,remove,stickyCont);

    stickyCont.onmousedown = function(event,) {
        dragAndDrop(stickyCont,event);
    };
    stickyCont.ondragstart = function() {
        return false;
    };

}) 
function noteActions(minimize,remove,stickyCont){
    remove.addEventListener("click", (e)=>{
        stickyCont.remove();
    })
    minimize.addEventListener("click", (e)=>{
        let noteCont = stickyCont.querySelector(".note-cont");
        let display = getComputedStyle(noteCont).getPropertyValue("display");
        if(display==="none") noteCont.style.display = "block";
        else noteCont.style.display = "none";
    })
}
function dragAndDrop(element,event){

        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
      
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
       
      
        moveAt(event.pageX, event.pageY);
      
        // moves the ball at (pageX, pageY) coordinates
        // taking initial shifts into account
        function moveAt(pageX, pageY) {
          element.style.left = pageX - shiftX + 'px';
          element.style.top = pageY - shiftY + 'px';
        }
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
      
        // move the ball on mousemove
        document.addEventListener('mousemove', onMouseMove);
      
        // drop the ball, remove unneeded handlers
        element.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          element.onmouseup = null;
        };    
      
}  
