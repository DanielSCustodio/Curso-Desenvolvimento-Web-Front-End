let lista = document.getElementById("lista");
let num   = parseInt(lista.dataset.num);
for(let i =0; i < num; i++){
    lista.innerHTML += "<li>"+ i + "</li>";
}