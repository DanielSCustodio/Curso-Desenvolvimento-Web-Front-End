var num = 5;
var numRandom = Math.random()*100

for( var i= 0; i <= num; i++){
    console.log(i);
}
console.log("Fim do For");

while(numRandom < 99){
    console.log(numRandom);
    numRandom = Math.random()*100;
}
console.log("Fim do While");