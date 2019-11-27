var salMin = prompt("Digite o valor do salário mínimo");
var qtdeKw = prompt("Digite a quantidade de Kw");

var valor1Kw = salMin / 700;
var valorTotal = valor1Kw * qtdeKw;
var valorDesc = valorTotal *0.9

document.write("Valor de 1 kw: R$"+valor1Kw+"<br/>");
document.write("Valor total da conta: R$"+valorTotal+"<br/>");
document.write("Valor com 10% de desconto: R$"+valorDesc+"<br/>");

console.log("Valor de 1 kw: R$"+valor1Kw)
console.log("Valor total da conta: R$"+valorTotal)
console.log("Valor com 10% de desconto: R$"+valorDesc)

alert("Valor 1kw R$"+valorKw);
alert("Valor total R$"+valorTotal);
alert ("Valor com 10% de desconto R$"+valorDesc); 
