let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// tool is basically an API jiske through aap apne graphics ko perform karoge
let tool =canvas.getContext("2d");

tool.strokeStyle = "red"; // for changing color
tool.lineWidth ="3";
tool.beginPath(); //ek new graphics(path)(line) create karenge
tool.moveTo(10,10); // esme 2 ciz hote hai kha se aapko aapke line ki starting karne hai
tool.lineTo(100, 150); // esme end point define hoga

//moveTo se lineTo tk ek invisible line bn chuki hogi uske andar color fill karne ke liye stroke use karte hai

tool.stroke(); //color fill karne ke liye use hota hai
