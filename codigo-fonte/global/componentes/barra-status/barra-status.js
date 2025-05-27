const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
const jogadorLogado = localStorage.getItem('jogadorLogado');
let jogador = jogadores.find(jogador => jogador.nickname === jogadorLogado);

atualizarAvatar(jogador);
atualizarNickname(jogador);
atualizarMoedas(jogador);
atualizarXp(jogador);
atualizarNivel(jogador);

function atualizarAvatar(jogador) {
  const nomeAvatar = jogador.avatar;
  const img = document.getElementById('avatar');

  img.src = `../global/imagens/avatar-${nomeAvatar}.png`;
  img.alt = `Avatar de ${nomeAvatar}`;
}

function atualizarNickname(jogador) {
  const nickname = document.getElementById('nickname');
  nickname.textContent = `#${jogador.nickname}`;
}

function atualizarMoedas(jogador) {
  const moedas = document.getElementById('moedas');
  moedas.textContent = jogador.moedas;
}

function atualizarXp(jogador) {
  const xp = document.getElementById('xp');
  xp.textContent = jogador.xp;
}

function atualizarNivel(jogador) {
  const nivel = document.getElementById('nivel');
  const nivelAtual = document.getElementById('nivel-atual');
  const nivelSeguinte = document.getElementById('nivel-seguinte');
  nivel.textContent = `Nível ${jogador.nivel}`;
  nivelAtual.textContent = `${jogador.nivel}`;
  nivelSeguinte.textContent = `${++jogador.nivel}`;

  const barraProgresso = document.querySelector(`.barra-progresso`);
  const progresso = (jogador.xp / (jogador.nivel * 100)) * 100;
  barraProgresso.style.width = `${progresso}%`;
}