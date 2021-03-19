function criarAluno(nome, n1, n2){
    return{
            nome:nome,
            nota1:n1,
            nota2:n2,
            media:function calcMedia(){
                return (this.nota1 + this.nota2)/2;
            }
    }
}

var turma = [ 
    criarAluno("Cacador de Marte",58,63),      
    criarAluno("Martha",98,13),       
];

var aluno = turma[1];
for(var i of turma){
    console.log(i.nome+"    "+
                i.media());
}


function pessoa(nome, cidade, bairro, anoNasc){
    this.nome = nome;
    this.cidade = cidade;
    this.bairro = bairro;
    this.anoNasc = anoNasc;
    this.idade = function(){
        return(2021-anoNasc);
    }
}

var person = new pessoa("Daniel","Tres Rios","Bemposta","1990");
var person2 = new pessoa("Marcio","Tres Rios","Bemposta","2020");

console.log("Nome: "+person.nome+
            "\n Cidade: "+person.cidade+
            "\n Bairro: "+person.bairro+
            "\n Idade: "+person.idade());

         