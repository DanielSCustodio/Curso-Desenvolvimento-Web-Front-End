var names = ['Batman','Super','Flash'];
var notaA = [8.8, 8.9, 7.8];
var notaB = [9.8, 10, 2.0];

function media(n1,n2){
    return(n1+n2)/2;
}

function situation(media){
    if(media > 7){
        return"Aprovado";
    }else{
        return "Reprovado"
    }

}
console.log("Nome   Nota 1   Nota 2   Media");
for(i in names){
    var nota1 = notaA[i];
    var nota2 = notaB[i];
    var m     = media(nota1, nota2)

    console.log(names[i]+"   "+
                nota1 +"     "+
                nota2 +"     "+
                m     +"     "+
                situation(m));
}