function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$ " + valorEmReal;
    ElementoValorConvertido.innerHTML = valorConvertido;
    var elementeBiticoin = document.getElementById("converteBitCoin");
    var valorBitcoin = valorEmReal / 209576.45;
    var bitcoinNoHtml = "Em biticoin você tem " + valorBitcoin;
    elementeBiticoin.innerHTML = bitcoinNoHtml;
  }
  
  function Libra() {
    var valorElemento = document.getElementById("valorparalibra");
    var valor = valorElemento.value;
    var valorEmRealNumerico = parseFloat(valor);
    var valorEmLibra = valorEmRealNumerico * 3.11;
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Libra Egípcia é £ " + valorEmLibra;
    ElementoValorConvertido.innerHTML = valorConvertido;
    var elementeBiticoin = document.getElementById("converteBitCoin");
    var valorBitcoin = valorEmLibra / 41915.29;
    var bitcoinNoHtml = "Em biticoin você tem " + valorBitcoin;
    elementeBiticoin.innerHTML = bitcoinNoHtml;
  }
  
  function anosLuz() {
    var distanciaElemento = document.getElementById("distancia");
    var valorEmKm = distanciaElemento.value;
    console.log(valorEmKm);
    var KmEmNumero = parseFloat(valorEmKm);
    var valorNaVelocidadeDaLuz = KmEmNumero / 9460800000000;
    var elementoValorConvertido = document.getElementById("anosLuzRodando");
    var valorConvertidoEmAnosLuz =
      "Você levara " + valorNaVelocidadeDaLuz + " anos luz até seu destino";
    elementoValorConvertido.innerHTML = valorConvertidoEmAnosLuz;
  }
  
  function temperatura() {
    var elementoTemperatura = document.getElementById("graus");
    var valorDaTemperatura = elementoTemperatura.value;
    var numeroDaTemperatura = parseInt(valorDaTemperatura);
    var convercaoDeGraus = (numeroDaTemperatura * 9) / 5 + 32;
    var elementoDoTitulo = document.getElementById("deCParaF");
    var elementoVisivel = convercaoDeGraus + " graus fahrenheit";
    elementoDoTitulo.innerHTML = elementoVisivel;
    console.log(convercaoDeGraus);
  }
  