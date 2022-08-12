let tela = document.getElementById("tela");

contexto = tela.getContext("2d");

contexto.beginPath();
contexto.lineWidth = 4;
contexto.strokeStyle = "blue";
contexto.moveTo(20,20);
contexto.lineTo(300,200);
contexto.stroke();



contexto.beginPath();
contexto.lineWidth = 10;
contexto.strokeStyle ="brown";
contexto.fillStyle = "green";
contexto.moveTo(30,30);
contexto.lineTo(320,400);
contexto.lineTo(30,500);
contexto.closePath();
contexto.fill();
contexto.stroke();

