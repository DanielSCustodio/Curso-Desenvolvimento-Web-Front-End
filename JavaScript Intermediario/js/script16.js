// localStorage.setItem("nome", "Leinad");   //chave = nome valor, conteudo =leinad
// let item = localStorage.getItem("nome");
// console.log(item);
//  localStorage.removeItem("nome");
onload = function () {
    let nome = localStorage.getItem("nome");     //Capturando o conteudo do input
    let h1 = document.getElementById("nome");      //Capturando a tag para ser setada
    h1.innerHTML = nome;                          //Setando o conteudo na tag
}


function atualizar(element) {
   let valor = element.value;
   let h1 = document.getElementById("nome")
   h1.innerHTML = valor;

   localStorage.setItem("nome", valor)
}

//Capturando um "numero" na memoria como string e transfromando em numero

// localStorage.setItem("n",5);              
let cap = localStorage.getItem("n")    
console.log(cap);
let num = JSON.parse(cap)
console.log(num);


//localStorage.clear() limpa tudo que esta na memoria