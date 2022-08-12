let image = document.getElementById("bat-1");

image.addEventListener("click", function(){
    // image.src="../img/bat-2.png" mesma funcao da linha abaixo
    let lastImage = image.getAttribute("src");
    image.setAttribute("src","../img/bat-2.png")
    
    console.log(lastImage);
});

