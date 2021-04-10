var carta1 = {
  nome:"Batman",
  atributos:{
  ataque:90,
  defesa:85,
  magia:5  
  }
}

var carta2 = {
  nome:"Superman",
  atributos:{
  ataque:60,
  defesa:90,
  magia:75  
  }
}

var carta3 = {
  nome:"Chapolin Colorado",
  atributos:{
  ataque:80,
  defesa:95,
  magia:50  
  }
}

var cartaMaquina
var cartaJogador
var cartas = [carta1, carta2, carta3]

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  
  var numeroCartaJogador = parseInt(Math.random() * 3)
  while(numeroCartaJogador == numeroCartaMaquina){
    numeroCartaJogador = parseInt(Math.random() * 3)
  }
  cartaJogador = cartas[numeroCartaJogador]
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  exibirOpcoes()
}

function exibirOpcoes(){
  var opcaoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for(var atributo in cartaJogador.atributos){
    opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado(){
  var radioAtributos = document.getElementsByName('atributo')
  
  for(var i = 0; i <radioAtributos.length; i++){
    if(radioAtributos[i].checked){
      return radioAtributos[i].value
    }
  }
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    alert('Você venceu!!! \nCarta máquina: ' + cartaMaquina.atributos[atributoSelecionado] + '\nCarta Jogador: ' + cartaJogador.atributos[atributoSelecionado])
    
  }else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    alert('Você perdeu!!! \nCarta máquina: ' + cartaMaquina.atributos[atributoSelecionado] + '\nCarta Jogador: ' + cartaJogador.atributos[atributoSelecionado])
  }else{
    alert('Empatou! \nCarta máquina: ' + cartaMaquina.atributos[atributoSelecionado] + '\nCarta Jogador: ' + cartaJogador.atributos[atributoSelecionado])
  }
}