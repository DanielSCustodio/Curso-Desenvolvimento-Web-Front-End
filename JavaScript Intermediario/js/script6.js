let text1 = document.getElementById("txt1");
text1.innerHTML  ="<h2>Novo text</h2>";


let text2 = document.getElementById("txt2");
console.log(text2.innerText);

let text3 = document.getElementById("txt2");
console.log(text3.textContent);

let text4 = document.getElementById("txt4");
text4.className="";
text4.style ="color:green";
text4.style.backgroundColor="white";

let myAtt = text4.getAttribute("meuAtt");
console.log(myAtt);
text4.setAttribute("meuAtt","Custodio");
console.log(text4);
