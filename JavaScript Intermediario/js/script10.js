let t1 = document.getElementById("titulo")
let t2 = document.getElementById("titulo2")


t1.onclick = upperCase;
t2.onclick = upperCase;

function upperCase(){
    this.innerHTML = this.innerHTML.toUpperCase();
}

