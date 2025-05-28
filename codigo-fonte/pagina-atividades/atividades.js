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

const divAtividades = document.getElementById("lista-atividades");
divAtividades.classList.remove("oculta");
const divSemAtividades = document.getElementById("sem-atividades");
divSemAtividades.classList.add("oculta");

function mostrarSemAtividades() {
  const divAtividades = document.getElementById("lista-atividades");
  divPremios.classList.add("oculta");
  const divSemPremios = document.getElementById("sem-atividades");
  divSemPremios.classList.remove("oculta");
}

document.addEventListener("DOMContentLoaded", () => {
  let atividades = localStorage.getItem("atividades");
  if (atividades) {
    const jogadorLogado = localStorage.getItem("jogadorLogado");
    atividades = JSON.parse(atividades);
    if (atividades[jogadorLogado]) {
      
      const divAtividades = document.getElementById("lista-atividades");
      const jogadores = JSON.parse(localStorage.getItem("jogadores")) || {};
      const xp_atual = jogadores.find(
        (jogador) => jogador.nickname === jogadorLogado
      ).xp;

      atividades[jogadorLogado].forEach((atividade, index) => {
        let diferenca_xp = (atividade.xp_inicio - xp_atual) * -1;
        let porcentagem = (diferenca_xp * 100) / atividade.xp;

        divAtividades.innerHTML += `
          <div class="atividade" id="atividade-${index}">
            <div class="linha-atividades">
              <h3 class="titulo-atividade">${atividade.titulo}</h3>
              <div class="info-atividade">
                ${
                  atividade.conquistado
                    ? `<span class="tag transparente">
                        <img src="../global/imagens/coroa.svg" alt="coroa">
                        Conquistado!
                      </span>`
                    : ""
                }
                <div class="xp">
                  <img src="../global/imagens/xp.svg" alt="XP" />
                  <span>${atividade.xp}</span>
                </div>
                <div class="moedas">
                  <img src="../global/imagens/moeda.svg" alt="Moedas" />
                  <span>${atividade.moedas}</span>
                </div>
              </div>
            </div>
            <div class="container-progresso">
              <div class="barra-progresso"></div>
            </div>
          </div>
        `;

        setTimeout(() => {
          const barraProgresso = document.querySelector(
            `#atividade-${index} .barra-progresso`
          );
          if (barraProgresso) {
            barraProgresso.style.width = `${porcentagem}%`;
          }
        }, 100);
      });
    } else {
      mostrarSemAtividades();
    }
  } else {
    mostrarSemAtividades();
  }
});
