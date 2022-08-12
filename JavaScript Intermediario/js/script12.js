function f(e) {
    console.log("Funcao F");
    console.log(this);
    console.log(e);
}

function f1(e) {
    console.log("Funcao F1");
    console.log(this);
    console.log(e);    //Captura o evento
    console.log(e.target); //captura o elemento
}


window.onload = function () {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.addEventListener("click", f1)
   
}