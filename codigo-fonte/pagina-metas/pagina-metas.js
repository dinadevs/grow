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

const divMetas = document.getElementById("lista-metas");
divMetas.classList.remove("oculta");
const divSemMetas = document.getElementById("sem-metas");
divSemMetas.classList.add("oculta");

function mostrarSemMetas() {
  const divMetas = document.getElementById("lista-metas");
  divMetas.classList.add("oculta");
  const divSemMetas = document.getElementById("sem-metas");
  divSemMetas.classList.remove("oculta");
}

document.addEventListener("DOMContentLoaded", () => {
  let metas = localStorage.getItem("metas");
  if (metas) {
    const jogadorLogado = localStorage.getItem("jogadorLogado");
    metas = JSON.parse(metas);
    if (metas[jogadorLogado]) {
      const divMetas = document.getElementById("lista-metas");
      metas[jogadorLogado].forEach((meta, index) => {
        divMetas.innerHTML += `
          <div class="metas" id="metas-${index}">
            <div class="linha-metas">
              <h3 class="titulo-metas">${meta.titulo}</h3>
              <div class="info-metas">
               
              <span class="tag transparente">
              <img src="../global/imagens/calendario.svg" alt="calendario">
              ${new Date(meta.inicio).toLocaleDateString("pt-BR")} -  ${new Date(meta.fim).toLocaleDateString("pt-BR")}
              </span>


                <div class="xp">
                  <img src="../global/imagens/xp.svg" alt="XP" />
                  <span>${meta.xp}</span>
                </div>
                <div class="moedas">
                  <img src="../global/imagens/moeda.svg" alt="Moedas" />
                  <span>${meta.moedas}</span>
                </div>
              </div>
            </div>
            
          </div>
        `;
      });
    } else {
      mostrarSemMetas();
    }
  } else {
    mostrarSemMetas();
  }
});
