


  
  function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados e tente novamente.');
    } else {
      var fsex = document.getElementsByTagName('input');
      var idade = ano - Number(fano.value);
      res.innerHTML = `Idade calculada: ${idade}`;
      var genero = '';
      var img = document.createElement('img');
      if (fsex[1].checked) {
        genero = 'homem calvo';
        if (idade >= 0 && idade < 15) {
          // crianca
          img.setAttribute('src', 'foto-de-menino.png');
        } else if (idade < 30) {
          // jovem
          img.setAttribute('src', 'foto-de-adolecenteM.png');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'foto-de-adulto.png');
        } else {
          // idoso
          img.setAttribute('src', 'foto-de-velho.png');
        }
      } else if (fsex[2].checked) {
        genero = 'mulher';
        if (idade >= 0 && idade < 10) {
          // crianca
          img.setAttribute('src', 'foto-de-menina.png');
        } else if (idade < 21) {
          // jovem
          img.setAttribute('src', 'foto-de-adolecenteF.png');
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'foto-de-mulher.png');
        } else {
          // idoso
          img.setAttribute('src', 'foto-de-velha.png');
        }
      }
      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
    }
  }