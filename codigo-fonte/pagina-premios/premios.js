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

const divPremios = document.getElementById("lista-premios");
divPremios.classList.remove("oculta");
const divSemPremios = document.getElementById("sem-premios");
divSemPremios.classList.add("oculta");

function mostrarSemPremios() {
  const divPremios = document.getElementById("lista-premios");
  divPremios.classList.add("oculta");
  const divSemPremios = document.getElementById("sem-premios");
  divSemPremios.classList.remove("oculta");
}

document.addEventListener("DOMContentLoaded", () => {
  let premios = localStorage.getItem("premios");
  if (premios) {
    const jogadorLogado = localStorage.getItem("jogadorLogado");
    premios = JSON.parse(premios);
    if (premios[jogadorLogado]) {
      
      const divPremios = document.getElementById("lista-premios");
      const jogadores = JSON.parse(localStorage.getItem("jogadores")) || {};
      const xp_atual = jogadores.find(
        (jogador) => jogador.nickname === jogadorLogado
      ).xp;

      premios[jogadorLogado].forEach((premio, index) => {
        let diferenca_xp = (premio.xp_inicio - xp_atual) * -1;
        let porcentagem = (diferenca_xp * 100) / premio.xp;

        divPremios.innerHTML += `
          <div class="premio" id="premio-${index}">
            <div class="linha-premio">
              <h3 class="titulo-premio">${premio.titulo}</h3>
              <div class="info-premio">
                ${
                  premio.conquistado
                    ? `<span class="tag transparente">
                        <img src="../global/imagens/coroa.svg" alt="coroa">
                        Conquistado!
                      </span>`
                    : ""
                }
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
            <div class="container-progresso">
              <div class="barra-progresso"></div>
            </div>
          </div>
        `;

        setTimeout(() => {
          const barraProgresso = document.querySelector(
            `#premio-${index} .barra-progresso`
          );
          if (barraProgresso) {
            barraProgresso.style.width = `${porcentagem}%`;
          }
        }, 100);
      });
    } else {
      mostrarSemPremios();
    }
  } else {
    mostrarSemPremios();
  }
});
