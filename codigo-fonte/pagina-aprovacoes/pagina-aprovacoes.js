carregaComponente('../global/componentes/cabecalho/cabecalho.html', 'cabecalho-global', '../global/componentes/cabecalho/cabecalho.js');
carregaComponente('../global/componentes/barra-status/barra-status.html', 'barra-status', '../global/componentes/barra-status/barra-status.js');
carregaComponente('../global/componentes/nav-global/nav-global.html', 'nav-global', '../global/componentes/nav-global/nav-global.js');

const lista = document.getElementById("lista-aprovacoes");

function renderizarPendentes() {
  lista.innerHTML = "";

  mockPendentes.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card-aprovacao";

    card.innerHTML = `
      <h2>${item.titulo}</h2>
      <div class="info-recompensas">
        <span><img src="../global/imagens/xp.svg" alt="XP">${item.xp}</span>
        <span><img src="../global/imagens/moeda.svg" alt="Moedas">${item.moedas}</span>
      </div>
      <div class="acoes">
        <button class="botao-aprovar">Aprovar</button>
        <button class="botao-negar">Negar</button>
      </div>
    `;

    card.querySelector(".botao-aprovar").onclick = () => {
      alert(`Atividade ${item.id} aprovada.`);
      card.remove();
    };

    card.querySelector(".botao-negar").onclick = () => {
      alert(`Atividade ${item.id} negada.`);
      card.remove();
    };

    lista.appendChild(card);
  });
}

renderizarPendentes();