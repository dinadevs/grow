carregaComponente(
  "../global/componentes/cabecalho/cabecalho.html",
  "cabecalho-global",
  "../global/componentes/cabecalho/cabecalho.js"
);

carregaComponente(
  '../global/componentes/nav-global/nav-global.html',
  'nav-global',
  '../global/componentes/nav-global/nav-global.js'
);

document.addEventListener("DOMContentLoaded", () => {
  mostrarPremiosConquistados();
  configurarBotaoVoltar();
  carregaDadosJogador();
});

function mostrarPremiosConquistados() {
  const premios = JSON.parse(localStorage.getItem("premios")) || {};
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  const listaPremios = document.getElementById("lista-premios");
  const contadorPremios = document.querySelector(".header-premios h2 span");
  const semPremios = document.querySelector(".sem-premios");

  if (!jogadorLogado || !premios[jogadorLogado]) {
    if (listaPremios) listaPremios.classList.add("oculta");
    if (semPremios) semPremios.classList.remove("oculta");
    if (contadorPremios) contadorPremios.textContent = "0";
    return;
  }
  
  const premiosConquistados = premios[jogadorLogado].filter(p => p.conquistado);
  
  if (contadorPremios) {
    contadorPremios.textContent = premiosConquistados.length;
  }

  if (premiosConquistados.length === 0) {
    if (listaPremios) listaPremios.classList.add("oculta");
    if (semPremios) semPremios.classList.remove("oculta");
    return;
  }

  premiosConquistados.forEach((premio, index) => {
    listaPremios.innerHTML += `
      <div class="premio" id="premio-${index}">
        <div class="linha-premio flex-between-center">
          <h3 class="titulo-premio">${premio.titulo}</h3>
          <div class="info-premio">
            <div class="xp">
              <img src="../global/imagens/xp.svg" alt="XP" />
              <span>${premio.xp}</span>
            </div>
            <div class="moedas">
              <img src="../global/imagens/moeda.svg" alt="Moedas" />
              <span>${premio.moedas}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}

function configurarBotaoVoltar() {
  const botaoVoltar = document.getElementById('botao-voltar');
  if (botaoVoltar) {
    botaoVoltar.addEventListener('click', () => {
      history.back();
    });
  }
}

function carregaDadosJogador() {
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const jogador = jogadores.find(j => j.nickname === jogadorLogado);
  
  const spanXp = document.getElementById("xp");
  spanXp.textContent = jogador.xp;

  const nickname = document.getElementById("nickname");
  nickname.textContent = jogador.nickname;

  const spanMoedas = document.getElementById("moedas");
  spanMoedas.textContent = jogador.historico_moedas;

  const spanNivel = document.getElementById("nivel");
  spanNivel.textContent = `Nível ${jogador.nivel}`;
}