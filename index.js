function NomeIdade(){
  let nome = document.getElementById("c1-campo-nome").value;
//   alert(nome);
  document.getElementById("textOld").innerHTML = "Opa! Olá " + nome + "!";
  let idade = document.getElementById("c1-campo-idade").value
  if(idade >= 18){
    document.getElementById("velho").innerHTML = "Idade Válida!";
  }else{
    document.getElementById("velho").innerHTML = "Idade Inválida.";
  };
};

function Numero(){
   let min = document.getElementById("min").value;
   let max = document.getElementById("max").value;
   let valores = [];
   for(let i = min; i < max; i++){
        valores.push(i);
    };
document.getElementById("numero").innerHTML = "Números: " + valores;
};

function ParImpar(){
  let numero = document.getElementById("c2-parImpar").value
  if(numero % 2 == 0){
    document.getElementById("c2-imparPar").innerHTML = "Par!!";
  } else {
    document.getElementById("c2-imparPar").innerHTML = "Ímpar!!";
  };
};

function aleatorio(){
  let quant = parseInt(document.getElementById("c3-quant").value);
  let min = parseInt(document.getElementById("c3-min").value);
  let max = parseInt(document.getElementById("c3-max").value);
  let tabela = [];
    for(let i = 0; i < quant; i++){
      tabela.push(Math.floor(Math.random() * (max - min) + min));
    };
  document.getElementById("c3-numeros").innerHTML = tabela;
};

function MegaSena () {
  let max = document.getElementById("c4-numero").value;
  let list = [];

  for(let n = 0; n < max; n++){
    list.push("jogos" + i)
   
document.getElementById("c4-resposta").innerHTML = list;
  };
};