document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("premios");
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  if (!jogadorLogado) return;

  const premiosData = JSON.parse(localStorage.getItem("premios")) || {};
  const premios = premiosData[jogadorLogado] || [];

  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const jogador = jogadores.find(j => j.nickname === jogadorLogado);
  if (!jogador) return;

  premios.forEach(premio => {
    if (premio.conquistado) return;

    const progressoXP = jogador.xp - premio.xp_inicio;
    const podeResgatar = progressoXP >= premio.xp;
    const podeComprar = jogador.moedas >= premio.moedas;

    const item = document.createElement("li");
    item.className = "premio";

    item.innerHTML = `
      <div class="info-premio">
        <p class="titulo-premio">${premio.titulo}</p>
        <div class="recompensas">
          <span><img src="../global/imagens/moeda.svg" alt="moeda"> ${premio.moedas}</span>
          <span><img src="../global/imagens/xp.svg" alt="xp"> ${premio.xp} XP</span>
        </div>
      </div>
      <div class="acoes-premio">
        <button class="botao-comprar${!podeComprar ? ' botao-desabilitado' : ''}" ${!podeComprar ? 'disabled' : ''}>Comprar</button>
        ${podeResgatar ? `<button class="botao-resgatar">Resgatar</button>` : ''}
      </div>
    `;

    configurarBotaoComprar(item, premio, jogador, jogadores, premiosData);
    configurarBotaoResgatar(item, premio, premiosData);

    lista.appendChild(item);
  });
});

function configurarBotaoComprar(item, premio, jogador, jogadores, premiosData) {
  const btn = item.querySelector(".botao-comprar");
  if (!btn || btn.disabled) return;

  btn.onclick = () => {
    jogador.moedas -= premio.moedas;
    jogador.historico_moedas += premio.moedas;
    premio.conquistado = true;

    localStorage.setItem("jogadores", JSON.stringify(jogadores));
    localStorage.setItem("premios", JSON.stringify(premiosData));

    item.remove();
    alert(`Você comprou "${premio.titulo}" por ${premio.moedas} moedas!`);
  };
}

function configurarBotaoResgatar(item, premio, premiosData) {
  const btn = item.querySelector(".botao-resgatar");
  if (!btn) return;

  btn.onclick = () => {
    premio.conquistado = true;
    localStorage.setItem("premios", JSON.stringify(premiosData));
    item.remove();
    alert(`Você resgatou "${premio.titulo}" após conquistar ${premio.xp} XP!`);
  };
}