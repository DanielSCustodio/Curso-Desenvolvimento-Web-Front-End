//carne -400gr por pessoa / +6 horas 650 gramas por pessoa
//cerveja -1200ml por pessoa / +6 horas 2000 ml por pessoa
//refri/agua 1000ml por pessoa / +6 horas 1500ml por pessoa
// criancas consome metade



let inputAdulto  = document.getElementById("adulto");
let inputCrianca = document.getElementById("crianca");
let inputDuracao = document.getElementById("duracao");
let resultado    = document.getElementById("resultado");


function calcular(){
	let adulto  = inputAdulto.value;
	let crianca = inputCrianca.value;
	let duracao = inputDuracao.value;

	let qtdCarne   = (carnePorPessoa(duracao)*adulto +(carnePorPessoa(duracao)/2 * crianca))/1000;
	let qtdCerveja = Math.ceil(cervejaPorPessoa(duracao)*adulto/350);
	let qtdRefri   = Math.ceil( (refriPorPessoa(duracao)*adulto +(refriPorPessoa(duracao))/2 * crianca) /2000 );

	impressao(qtdCarne, qtdCerveja,qtdRefri);
}



function impressao(qtdCarne, qtdCerveja,qtdRefri){
	 resultado.innerHTML = `<h3>${qtdCarne} Kg de carne</h3>`
	 resultado.innerHTML += `<h3>${qtdCerveja} Latinhas de cerveja</h3>`
	 resultado.innerHTML += `<h3>${qtdRefri} Pets de 2L de refrigerante</h3>`

}


function carnePorPessoa(duracao){
		if(duracao >= 6){
		return  650;	
	}else{
	    return 400;
	}
 }


function cervejaPorPessoa(duracao){
		if(duracao >= 1){
		return  1300;	
	}else{
	    return 2200;
	}
 }


function refriPorPessoa(duracao){
		if(duracao >= 6){
		return  1500;	
	}else{
	    return 800;
	}
 }