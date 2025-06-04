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

  const jogadorLogado = localStorage.getItem("jogadorLogado");
  const penalidadesObj = JSON.parse(localStorage.getItem("penalidades")) || {};
  const penalidades = Array.isArray(penalidadesObj[jogadorLogado])
    ? penalidadesObj[jogadorLogado]
    : []

  if (penalidades.length === 0) {
    return mostrarSemPenalidades();
  }

  divPenalidades.classList.remove("oculta");
  if (divSemPenalidades) divSemPenalidades.classList.add("oculta");
  penalidades.slice().reverse().forEach((penalidade, index) => {
    divPenalidades.innerHTML += `
      <div class="penalidade" id="penalidade-${index}">
        <div class="linha-penalidade">
          <h3 class="titulo-penalidade">${penalidade.titulo}</h3>
          <div class="info-penalidade">
            <div class="xp">
              <img src="../global/imagens/xp.svg" alt="XP" />
              <span>-${penalidade.xp}</span>
            </div>
            <div class="moedas">
              <img src="../global/imagens/moeda.svg" alt="Moedas" />
              <span>-${penalidade.moedas}</span>
            </div>
            <p class="data-penalidade">${penalidade.data}</p>
          </div>
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

