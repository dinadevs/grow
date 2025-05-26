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
  preencheData();
  setaAvatar();
  
  let checklist = localStorage.getItem("checklist");
  if (checklist) {
    checklist = JSON.parse(checklist);
    const diaHoje = new Date().toLocaleDateString("pt-BR");
    const diaChecklist = checklist.dia;
    const items = checklist.items;
    if (diaChecklist == diaHoje && items.length > 0) {
      carregaChecklist(items);
    } else {
      concluiChecklistAnterior(checklist);
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

function preencheData() {
  const data = new Date();
  const dataFormatada = data.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  document.getElementById("data").innerText = dataFormatada;
}

function setaAvatar() {
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  const avatar = JSON.parse(localStorage.getItem("jogadores")).find(jogador => jogador.nickname == jogadorLogado).avatar;
  const avatarFeliz = document.getElementById("avatar-feliz").src = `../global/imagens/feliz-${avatar}.png`;
}
// Administração de eventos para os checkboxes
document.getElementById("checklist").addEventListener("change", function(event) {
  const target = event.target;
  if (target.type === "checkbox") {
    const index = parseInt(target.id.split("-")[1]);
    let checklist = JSON.parse(localStorage.getItem("checklist"));
    const tipo = checklist.items[index].prazo ? "metas" : "atividades";
    // quando checa
    if (target.checked) {
      administraAprovacao(checklist.items[index].id, tipo, true); 
      tocaAudio();
      mostraToast();
      checklist.items[index].feito = true;
    } else { // quando "descheca"
      if(administraAprovacao(checklist.items[index].id, tipo, false)) {
        alerta("Ops, você não pode desmarcar porque a tarefa já foi aprovada!");
        target.checked = true;
      } else {
        checklist.items[index].feito = false;
      }
    }
    localStorage.setItem("checklist", JSON.stringify(checklist));
  }
});

function administraAprovacao(id, tipoDeTarefa, valor) {
  let tarefas = JSON.parse(localStorage.getItem(tipoDeTarefa));
  const jogadorLogado = localStorage.getItem("jogadorLogado");

  if (tarefas && tarefas[jogadorLogado]) {
    const index = tarefas[jogadorLogado].findIndex(item => item.id == id);
    if (index !== -1) {
      if(tarefas[jogadorLogado][index].concluido == true) {
        return true;
      }
      tarefas[jogadorLogado][index].pendente = valor;
      localStorage.setItem(tipoDeTarefa, JSON.stringify(tarefas));
    }
  }
}

function tocaAudio() {
  const audio = new Audio("../global/sons/feito.mp3");
  audio.play();
}

function concluiChecklistAnterior(checklist) {
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  let jogadores = JSON.parse(localStorage.getItem("jogadores"));

  checklist.items.forEach(item => {
    if(item.feito) {
      const tipo = item.prazo ? "metas" : "atividades";
      if (tipo === "metas") {
        let metas = JSON.parse(localStorage.getItem("metas"));
        if (metas && metas[jogadorLogado]) {
          let meta = metas[jogadorLogado].find(m => m.id === item.id);
          if (meta.pendente) {
            meta.pendente = false;
            contabilizaPontos(meta, jogadorLogado);
            meta.concluido = true;
            localStorage.setItem("metas", JSON.stringify(metas));
          }
        }
      } else {
        let atividades = JSON.parse(localStorage.getItem("atividades"));
        if (atividades && atividades[jogadorLogado]) {
          let atividade = atividades[jogadorLogado].find(a => a.id === item.id);
          if (atividade.pendente) {
            atividade.pendente = false;
            contabilizaPontos(atividade, jogadorLogado);
            atividade.concluido = !!atividade.unica;
            localStorage.setItem("atividades", JSON.stringify(atividades));
          }
        }
      }
    }
  });
}

function contabilizaPontos(tarefa, jogadorLogado) {
  let jogadores = JSON.parse(localStorage.getItem("jogadores"));
  jogadores[jogadorLogado].xp += tarefa.xp;
  jogadores[jogadorLogado].moedas += tarefa.moedas;
  jogadores[jogadorLogado].historico_moedas += tarefa.moedas;
  jogadores[jogadorLogado].nivel = Math.floor(jogadores[jogadorLogado].xp / 100);

  localStorage.setItem("jogadores", JSON.stringify(jogadores));
}
