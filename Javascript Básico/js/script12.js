var nota1 = 8;
var nota2 = 1;

media = (nota1 + nota2)/2;
var conceito ="";

if (media>= 8 ) {
   conceito = "Otimo";
}else if(media >=5) {
   conceito = "Regular";
}else{
    conceito = "Horrivel";
}

console.log("Sua media foi: "+ media);
console.log("Seu conceito: "+ conceito);

switch (conceito) {
    case "Otimo":
        console.log("Parabens! Continue assim!");
        break;
    case "Regular":
        console.log("Voce esta no caminho certo. Muito bom!");
        break;
    case "Horrivel":
        console.log("Pede pra sair!");
        break;
    default:
        console.log("Houve algum erro");
        break;
}

