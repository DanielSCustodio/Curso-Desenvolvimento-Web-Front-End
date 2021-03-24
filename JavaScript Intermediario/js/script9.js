function loaded(){
    let t = document.getElementById("titulo");
    t.onclick = mudarText;

    function mudarText(){
        this.innerHTML = "New Text";
    }

    let get = document.getElementById("titulo2");
    get.addEventListener("click", newTxt)
    get.addEventListener("mouseout", mouseout)

}  function newTxt(){
    this.innerHTML = "Storm Leinad"
}

function mouseout(){
    this.innerHTML = "Leinad Storm"
}