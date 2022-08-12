// &&  e
// ||


var a = false;
var b = false;

c = a && b;
console.log(c);

//__________________________________

var idade = 35;
var maior20  = idade > 20;
var menor30 = idade <30;
var entre = maior20 && menor30;

console.log("Maior que vinte",maior20);
console.log("Menor que trinta",menor30);
console.log(entre);

//__________________________________
var idade2 = 100;
var menor10 = idade2 <= 10;
var maior65 = idade2 >= 65;
var resultado = menor10 || maior65;     
console.log(resultado);
