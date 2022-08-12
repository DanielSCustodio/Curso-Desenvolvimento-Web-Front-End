let pessoas = ["Batman","Lanterna Verde","Mulher Maravilha","Flash","Cacador de Marte"]
function sortear() {
    let np = pessoas.length ;
    let ns = Math.floor((Math.random() * np));
    document.getElementById("display").innerHTML = pessoas[ns]; //Captura a tag e seta o valor 
}

console.log(pessoas.length);

// let ran = Math.random();
// console.log(ran);                                      floor corta e mantem o numero 
// console.log(Math.floor(ran)*10);   ;;entendo a logicao round corta e joga pra cima
                                
