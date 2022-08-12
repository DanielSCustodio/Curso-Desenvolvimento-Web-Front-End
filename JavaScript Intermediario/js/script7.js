var h1 = document.getElementsByTagName("h1")[0];

function changeH1(input){
    
  h1.innerText = input.value;
    
}

function hideH1(){
  if(h1.style.display!="none"){
    h1.style.display ="none";
  }else{
    h1.style.display ="block";
    h1.style.color ="green"
  }
}

