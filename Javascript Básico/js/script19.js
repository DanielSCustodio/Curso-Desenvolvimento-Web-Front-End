function calcMedia(n1,n2){
    return (this.nota[0] + this.nota[1]) /2
}


var aluno = new Object();
var aluno2 = new Object();


aluno.nome="Sapo Verde"
aluno.nota=[150,93];
aluno.media = calcMedia; 

aluno2.nome="Sapo Verde"
aluno2.nota=[150,93];
aluno2.media = calcMedia;

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());


