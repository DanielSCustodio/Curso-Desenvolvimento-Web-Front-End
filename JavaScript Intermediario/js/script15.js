let a = {
    nome: "Jason",
    nota: 8.5,
}
let b = JSON.stringify(a);
console.log(b);

let c = JSON.parse(b);
console.log(c);

let d ='{"nome": "Daniel", "idade":58}';
let e =JSON.parse(d);
console.log(e);

console.log(e.nome);
console.log(e.idade);
