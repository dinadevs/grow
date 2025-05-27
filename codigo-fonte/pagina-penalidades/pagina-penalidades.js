carregaComponente(
  "../global/componentes/cabecalho/cabecalho.html",
  "cabecalho-global",
  "../global/componentes/cabecalho/cabecalho.js"
);

carregaComponente(
  "../global/componentes/barra-status/barra-status.html",
  "barra-status",
  "../global/componentes/barra-status/barra-status.js"
);

document.addEventListener("DOMContentLoaded", () => {
  const divPenalidades = document.getElementById("lista-penalidades");
  const divSemPenalidades = document.getElementById("sem-penalidades");

  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
  const jogadorLogado = localStorage.getItem("jogadorLogado");

  if (!jogadores[jogadorLogado]) {
    return mostrarSemPenalidades();
  }

  let historico = jogadores[jogadorLogado].historico_moedas;

  if (!Array.isArray(historico)) {
    return mostrarSemPenalidades();
  }

  const penalidades = historico.filter(item => item.tipo === "penalidade");

  if (penalidades.length === 0) {
    return mostrarSemPenalidades();
  }

  divPenalidades.classList.remove("oculta");
  if (divSemPenalidades) divSemPenalidades.classList.add("oculta");

  penalidades.reverse().forEach((penalidade, index) => {
    divPenalidades.innerHTML += `
      <div class="penalidade" id="penalidade-${index}">
        <div class="linha-penalidade">
          <h3 class="titulo-penalidade">${penalidade.descricao}</h3>
          <div class="info-penalidade">
            <div class="xp">
              <img src="../global/imagens/xp.svg" alt="XP" />
              <span>${penalidade.xp}</span>
            </div>
            <div class="moedas">
              <img src="../global/imagens/moeda.svg" alt="Moedas" />
              <span>${penalidade.moedas}</span>
        </div>
      </div>
    `;
  });
});

function mostrarSemPenalidades() {
  const divPenalidades = document.getElementById("lista-penalidades");
  const divSemPenalidades = document.getElementById("sem-penalidades");

  if (divPenalidades) divPenalidades.classList.add("oculta");
  if (divSemPenalidades) divSemPenalidades.classList.remove("oculta");
}

