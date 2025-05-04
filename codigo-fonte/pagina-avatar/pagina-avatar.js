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

function configurarBotaoVoltar() {
  const btn = document.querySelector('.titulo-e-botoes button');
  btn.onclick = () => window.history.back();
}

function marcarAvatarAtual() {
  const jogadores   = JSON.parse(localStorage.getItem('jogadores')) || [];
  const logado      = localStorage.getItem('jogadorLogado');
  const avatarName  = jogadores[logado]?.avatar;
  if (!avatarName) return;

  const radio = document.querySelector(
    `input[name="avatar"][value$="avatar-${avatarName}.png"]`
  );
  if (radio) radio.checked = true;
}

function configurarBotaoAtualizar() {

  const btn = document.querySelector('input.botao');
  btn.onclick = function(event) {
    const selecionado = document.querySelector('input[name="avatar"]:checked');
    if (!selecionado) return; 
    const nomeAvatar = selecionado.value;

    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    const logado    = localStorage.getItem('jogadorLogado');
    jogadores[logado].avatar = nomeAvatar;
    localStorage.setItem('jogadores', JSON.stringify(jogadores));

    if (typeof window.atualizarBarraStatus === 'function') {
      window.atualizarBarraStatus();
    }

  };
}

window.onload = () => {
  configurarBotaoVoltar();
  marcarAvatarAtual();
  configurarBotaoAtualizar();
};
