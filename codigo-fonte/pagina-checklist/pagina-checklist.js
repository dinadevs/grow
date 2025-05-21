carregaComponente(
  '../global/componentes/cabecalho/cabecalho.html',
  'cabecalho-global',
  '../global/componentes/cabecalho/cabecalho.js'
);

carregaComponente(
  '../global/componentes/barra-status/barra-status.html',
  'barra-status',
  '../global/componentes/barra-status/barra-status.js'
);

carregaComponente(
  '../global/componentes/nav-global/nav-global.html',
  'nav-global',
  '../global/componentes/nav-global/nav-global.js'
);

document.addEventListener("DOMContentLoaded", () => {
  let checklist = localStorage.getItem("checklist");
  if (checklist) {
    checklist = JSON.parse(checklist);
    const diaHoje = new Date().toLocaleDateString("pt-BR");
    const diaChecklist = checklist.dia;
    const items = checklist.items;
    if (diaChecklist == diaHoje && items.length > 0) {
      carregaChecklist(items);
    } else {
      criaChecklist();
    }
  } else {
    criaChecklist();
  }
});

function carregaChecklist(items) {
  const divChecklist = document.getElementById("checklist");
  items.forEach((item, index) => {
    divChecklist.innerHTML += `
      <div class="checklist-item">
        <input type="checkbox" id="item-${index}" ${item.feito ? "checked" : ""} />
        <label for="item-${index}">${item.titulo}</label>
        ${item.prazo ?
        `<span class="tag">
            <img src="../global/imagens/calendario.svg" alt="calendario">
            Até ${item.prazo}
          </span>`
        : ""}
      </div>
      `;
  })
}

function criaChecklist() {
  const diaHoje = new Date().toLocaleDateString("pt-BR");
  const checklist = {
    dia: diaHoje,
    items: []
  };

  let atividades = JSON.parse(localStorage.getItem("atividades"));
  let metas = JSON.parse(localStorage.getItem("metas"));
  const jogadorLogado = localStorage.getItem("jogadorLogado");

  if (atividades && atividades[jogadorLogado].length > 0) {
    atividades = atividades[jogadorLogado];

    const atividadesUnicas = atividades.filter(atividade => atividade.unica && !atividade.concluido);
    const atividadesDiarias = atividades.filter(atividade => atividade.recorrencia == "diaria");
    const atividadesSemanais = atividades.filter(atividade => atividade.recorrencia == "semanal" && atividade.dia == new Date().getDay());
    atividades = [...atividadesUnicas, ...atividadesDiarias, ...atividadesSemanais];

    atividades.forEach(atividade => {
      checklist.items.push({
        id: atividade.id,
        titulo: atividade.titulo,
        feito: false,
        prazo: null
      });
    });
  }

  if (metas && metas.length > 0) {
    let metas = metas[jogadorLogado].filter(meta => {
      const dataInicio = new Date(meta.inicio);
      const dataFim = new Date(meta.fim);
      const dataHoje = new Date();
      return !meta.concluido && dataInicio <= dataHoje && dataHoje <= dataFim;
    });

    metas.forEach(meta => {
      checklist.items.push({
        id: meta.id,
        titulo: meta.titulo,
        feito: false,
        prazo: meta.fim
      });
    });
  }

  if (checklist.items.length > 0) {
    localStorage.setItem("checklist", JSON.stringify(checklist));
    carregaChecklist(checklist.items);
  }
}