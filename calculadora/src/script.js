var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))
var operacao = prompt("Digite o número referente a operação que deseja fazer. \n1 - Divisão \n2 - Multiplicação \n3 - Soma \n4 - Subtração")

if(operacao == 1){
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
  } else if (operacao == 2){
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
  } else if (operacao == 3){
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
  } else if (operacao == 4){
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
  } else {
    document.write("<h2>Opção inválida.</h2>")
  }
