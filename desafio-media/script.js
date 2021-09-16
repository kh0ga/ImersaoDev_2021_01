

//Atribuição evento click ao botão calcular
let btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', calcularMedia);

//Função de calcular
function calcularMedia () {

  //Atribuindo valores recebidos dos inputs nas variáveis
  let n1 = parseFloat(document.getElementById('nota1').value);
  let n2 = parseFloat(document.getElementById('nota2').value);
  let n3 = parseFloat(document.getElementById('nota3').value);
  let n4 = parseFloat(document.getElementById('nota4').value);

  
  let resultado = document.getElementById('resultadoMedia');
  let classificacao = document.getElementById('resultadoClassificacao')

  //Calculo de média e atribuição a variável media
  let media = ((n1 + n2 + n3 + n4)/4).toFixed(1);

  //Condição se foi aprovado ou não | Alterar o <p> para mostrar o resultado
  if(media >= 7){
    
    classificacao.textContent = 'Parabéns você passou! :D';

  } else {

    classificacao.textContent = 'Infelizmente você não passou :(';
  }

  // Mostrar resultado da média
  resultado.textContent = 'A sua média é ' + media;
  
}


