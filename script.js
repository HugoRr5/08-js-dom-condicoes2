

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
  
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
      // Bom Dia!!!
      img.src = 'foto-da-manha.png';
      document.body.style.background = '#e2cd9f';
    } else if (hora >= 12 && hora < 18) {
      // Boa Tarde!!!
      img.src = 'foto-da-tarde.png';
      document.body.style.background = '7eacc4';
    } else {
      // Boa Noite!!!
      img.src = 'foto-da-noite.png';
      document.body.style.background = '#00009C';
    }
  }
  
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