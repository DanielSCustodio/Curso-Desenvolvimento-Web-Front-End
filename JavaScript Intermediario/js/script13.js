window.onload = function () {
    let d1 = document.getElementById("d1") //capturando os elementos filhos
    console.log(d1.children);
    let h1 = d1.children[0]                //capturando um filho em especifico
    console.log(h1);
    div = h1.parentElement                 //capturando elemento pai
    console.log(div);

    // let d2 = document.getElementById("d2")


  let title = document.getElementsByTagName("h1")
  for (let i of title) {
      console.log(i);

      i.addEventListener("click",qop)
  }

  function qop(e) {             //capturando o evento
        let t = e.target;         //atraves do evento capturando o elemento
        console.log(t.parentElement); // pegando a tag pai do elemento
  }
 }