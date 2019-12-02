Var numFilme = 0;

function tocaAnterior(){
    numFilme--;
    if (numFilme <0){
        numFilme=3;
    }
    document.getElementById("myvideo").src="./filme"+numFilme+".mp4";
    document.getElementById("myvideo").play();

}
function tocaAtual(){
    console.log("atual =" +document.getElementById("myvideo").src);

    document.getElementById("myvideo").src="./filme"+numFilme+".mp4";
    document.getElementById("myvideo").play();
    console.log("ah...chato!");
}
function paraTudo(){
    document.getElementById("myvideo").onpause();
}