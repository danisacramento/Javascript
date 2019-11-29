function coisar() {
    var nome = document.getElementById("nomao").value;
    //Pedro de Alcântara João Carlos Leopoldo Salvador Bibiano Francisco Xavier de Paula Leocádio Miguel Gabriel Rafael Gonzaga
    var pos = 0;
    var primPalavra;
    var pNomes = [];
    var posVetor = 0;
    console.log("Li o nome = " + nome);
    console.log("Tamanho da palavra = " + nome.length);


    console.log("O primeiro espaco em branco esta na posicao " + pos);
    while (pos >= 0) {
        primPalavra = nome.slice(0, pos);
        console.log("Extraida a palavra = " + primPalavra);
        nome = nome.slice(pos + 1);
        pos = nome.indexOf(" ");
    }
    primPalavra = nome;
    console.log("Extraida a palavra = " + primPalavra);

    console.log(primPalavra);

}
