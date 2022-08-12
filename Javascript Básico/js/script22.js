var d = new Date(2021,06,15, 11,11);
console.log(d);
console.log("Hora: "+d.getHours());
console.log("-------------------------------------");
var t = new Date("jan 11 1990 23:30")
console.log(t);
console.log("Minutos: "+t.getMinutes());
console.log("Segundos: "+t.getSeconds());


console.log("-------------------------------------");
var a = new Date("05/23/2022")
console.log(a);
console.log("Dia: "+a.getDate());

console.log("-------------------------------------");
var b = new Date("07-13-1997")
console.log(b);
console.log("Ano "+b.getFullYear());
console.log("-------------------------------------");

var c = new Date("12/25/2020");
var dia  = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]
console.log(dia[c.getDay()]);

