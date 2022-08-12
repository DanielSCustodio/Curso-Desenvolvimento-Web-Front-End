var a ={
    nome: "Bruce",
    idade: 45,
}
console.log(a);

function obj(n, s){
    return {nome:n,
            idade:s}
}
var b = obj("Batman",45);
console.log(b);

function objeto(n,s){
    this.nome=n;
    this.idade=45
}
var c = new objeto("Batman", 45);
console.log(c);


