

var video = document.getElementById("video");
document.getElementById("controls").style.display = "none";

function show(){
   let display = document.getElementById("controls").style.display;
   
    if(display =="none"){
        document.getElementById("controls").style.display ="block";
    }
}

function hide(){
    let display = document.getElementById("controls").style.display;
   
    if(display =="block"){
        document.getElementById("controls").style.display ="none";
    }
}

function menos_velocidade(){
    video.playbackRate -= 0.1;
}


function retroceder(){
    video.currentTime -=30
}


function play(){
    video.play();
}


function stop(){
    video.pause();
    video.currentTime =2;
}


function avancar(){
    video.currentTime +=30;

}


function mais_velocidade(){
    video.playbackRate += 0.1;
}