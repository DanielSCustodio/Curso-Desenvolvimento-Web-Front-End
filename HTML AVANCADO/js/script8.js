let tela = document.getElementById("tela");

let contexto = tela.getContext("2d");

// contexto.fillStyle ="red";
// contexto.fillRect(10,10, 100,200);      
// 2 primeiras coordenas sao do afastamento em relacao a tela a 2 ultimas sao do tamanho do elementp


// contexto.strokeStyle = "red";
// contexto.strokeRect(10,10, 100,200);      


contexto.rect(10,10,100,200);
contexto.fillStyle ="gray";
contexto.strokeStyle = "purple";
contexto.lineWidth = 5;

contexto.fill();
contexto.stroke();

contexto.clearRect(40, 30, 30, 30);
