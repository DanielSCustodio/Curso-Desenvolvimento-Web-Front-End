var aluno = { nome: "Maria",
              notas: [8,5]
}
var newProp = "Endereco"
aluno[newProp] = "Estrada Feliz"
aluno.matricula = "125.896.258.21"
console.log(aluno.notas[1]);
console.log(aluno["notas"][0]);
console.log(aluno);

var pessoa = new Object();
pessoa.nome = "Batman";
pessoa.idade = 95;
pessoa.altura = 1.89;

console.log(pessoa);
console.log(pessoa.nome);
