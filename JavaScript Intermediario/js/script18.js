var interval;
var n = 0;

function atualizar(){
	let h1 = document.getElementById("h1")
	h1.innerHTML += " " +n+",";
	n++; 
}

function start(){
	interval = setInterval(atualizar, 1000)
}

function stop(){
	clearInterval(interval)
}


// setTimeout executa a acao uma vez
// clearTimeout cancela a execucao do setTimeout antes que ela aconteca