let tela = document.getElementById("tela");
let context = tela.getContext("2d");

context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(500,0);
context.lineWidth =5;
context.strokeStyle = "#F4E21E";

context.stroke();