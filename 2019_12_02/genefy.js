var numMusica= 0;
var tempo = 0;
function tocaAnterior(){
    tempo=0
    numMusica--;
    if(numMusica < 0){
        numMusica = 3;
    }
    else{
        document.getElementById("music").src = "musica/music"+numMusica+".mp3";
    document.getElementById("music").play();
    }
}

function tocarAtual(){
    console.log("musica atual = "+document.getElementById("music").src);
    document.getElementById("music").src = "musica/music"+numMusica+".mp3";
    document.getElementById("music").currentTime = tempo;
    document.getElementById("music").play();
    console.log("IH....");
}
function paraTudo(){
    document.getElementById("music").pause();
    tempo = document.getElementById("music").currentTime;
}
function tocarProxima(){
    tempo=0
    numMusica++;
    if(numMusica >3){
        numMusica = 0;
    }
    else{
        document.getElementById("music").src = "musica/music"+numMusica+".mp3";
    document.getElementById("music").play();
    }
}