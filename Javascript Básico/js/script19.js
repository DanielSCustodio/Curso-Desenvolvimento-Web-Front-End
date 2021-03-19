function calcMedia(n1,n2){
    return (this.nota[0] + this.nota[1]) /2
}

var aluno = new Object();
aluno.nome="Lanterna Verde"
aluno.nota=[50,1110];
aluno.media = calcMedia;

var aluno2 = new Object();
aluno2.nome="Sapo Verde"
aluno2.nota=[150,93];
aluno2.media = calcMedia;

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno2.nome);
console.log(aluno2.media());


