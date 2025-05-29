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
  divAtividades.classList.add("oculta");
  const divSemAtividades = document.getElementById("sem-atividades");
  divSemAtividades.classList.remove("oculta");
}

document.addEventListener("DOMContentLoaded", () => {
  let atividades = localStorage.getItem("atividades");
  if (atividades) {
    const jogadorLogado = localStorage.getItem("jogadorLogado");
    atividades = JSON.parse(atividades);
    if (atividades[jogadorLogado]) {
      const divAtividades = document.getElementById("lista-atividades");
      atividades[jogadorLogado].forEach((atividade, index) => {
        divAtividades.innerHTML += `
          <div class="atividade" id="atividade-${index}">
            <div class="linha-atividade">
              <h3 class="titulo-atividade">${atividade.titulo}</h3>
              <div class="info-atividade">
               
              <span class="tag transparente">
              <img src="../global/imagens/calendario.svg" alt="calendario">
              ${atividade.recorrencia}
              </span>


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
            
          </div>
        `;
      });
    } else {
      mostrarSemAtividades();
    }
  } else {
    mostrarSemAtividades();
  }
});
