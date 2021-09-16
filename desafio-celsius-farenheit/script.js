

//FC = Farenheit para Celsius
//CF = Celsius para Farenheit
let btnConverterCF = document.getElementById('btnCF');
let btnConverterFC = document.getElementById('btnFC');

//Função converter Celsius para Farenheit
function converterCF(){
  let celsius = parseFloat(document.getElementById('celsius').value);
  let resultado = document.getElementById('resultadoCF');

  //Formula Celsius para Farenheit
  let valorConvertido = ((celsius*1.8)+32).toFixed(1);

  resultado.textContent = valorConvertido;
  
}

//Função converter Farenheit para Celsius
function converterFC(){
  let farenheit = parseFloat(document.getElementById('farenheit').value);
  let resultado = document.getElementById('resultadoFC');

  //Formula Farenheit para Celsius
  let valorConvertido = ((farenheit-32)/1.8).toFixed(1);

  resultado.textContent = valorConvertido;
  
}

//Ao ser acionado por click, o botão btnCF chama a função converterCF
btnConverterCF.addEventListener('click', converterCF);
btnConverterFC.addEventListener('click', converterFC);