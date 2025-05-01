carregaComponente(
    '../global/componentes/cabecalho/cabecalho.html',
    'cabecalho-global',
    '../global/componentes/cabecalho/cabecalho.js'
);

carregaComponente(
    '../global/componentes/barra-status/barra-status.html',
    'barra-status',
    '../global/componentes/barra-status/barra-status.js'
);

var avatarSalvo = localStorage.getItem("avatarSelecionado"); 

if (avatarSalvo) {
  var radios = document.getElementsByName("avatar"); 
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].value === avatarSalvo) {
      radios[i].checked = true; 
    }
  }


  var avatarTopo = document.getElementById("avatar");
  if (avatarTopo) {
    avatarTopo.src = avatarSalvo ; 
  }
}


var botaoAtualizar = document.querySelector('input[type="submit"]');

botaoAtualizar.onclick = function () {
  var radios = document.getElementsByName("avatar");
  var avatarEscolhido = null;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      avatarEscolhido = radios[i].value;
      break;
    }
  }

  if (avatarEscolhido) {
    localStorage.setItem("avatarSelecionado", avatarEscolhido); 

    var avatarGlobal = document.getElementById("avatar");
    if (avatarGlobal) {
      avatarGlobal.src = avatarEscolhido ;
    }

  }
};


var botaoVoltar = document.querySelector(".titulo-e-botoes button");

botaoVoltar.onclick = function () {
  window.location.href = history.back;
};
