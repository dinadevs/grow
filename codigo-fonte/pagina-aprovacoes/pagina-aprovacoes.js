carregaComponente('../global/componentes/cabecalho/cabecalho.html', 'cabecalho-global', '../global/componentes/cabecalho/cabecalho.js');
carregaComponente('../global/componentes/barra-status/barra-status.html', 'barra-status', '../global/componentes/barra-status/barra-status.js');
carregaComponente('../global/componentes/nav-global/nav-global.html', 'nav-global', '../global/componentes/nav-global/nav-global.js');

const lista = document.getElementById("lista-aprovacoes");

function renderizarPendentes() {
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  let atividades = JSON.parse(localStorage.getItem("atividades")) || { jogadorLogado: [] };
  let metas = JSON.parse(localStorage.getItem("metas")) || { jogadorLogado: [] };

  let tarefasPendentes = atividades[jogadorLogado]?.filter(atividade => atividade.pendente) || [];
  tarefasPendentes.push(...metas[jogadorLogado]?.filter(meta => meta.pendente) || []);

  lista.innerHTML = "";

  tarefasPendentes.forEach((item) => {
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
      const tipo = item.prazo ? "metas" : "atividades";
      if (tipo === "metas") {
        if (metas && metas[jogadorLogado]) {
          let meta = metas[jogadorLogado].find(m => m.id === item.id);
          meta.pendente = false;
          contabilizaPontos(meta, jogadorLogado);
          meta.concluido = true;
          localStorage.setItem("metas", JSON.stringify(metas));
        }
      } else {
        if (atividades && atividades[jogadorLogado]) {
          let atividade = atividades[jogadorLogado].find(a => a.id === item.id);
          atividade.pendente = false;
          contabilizaPontos(atividade, jogadorLogado);
          atividade.concluido = !!atividade.unica;
          localStorage.setItem("atividades", JSON.stringify(atividades));
        }
      }
      alert(`Tarefa ${item.id} aprovada.`);
      card.remove();
    };

    card.querySelector(".botao-negar").onclick = () => {
      const tipo = item.prazo ? "metas" : "atividades";
      if (tipo === "metas") {
        if (metas && metas[jogadorLogado]) {
          let meta = metas[jogadorLogado].find(m => m.id === item.id);
          meta.pendente = false;
          localStorage.setItem("metas", JSON.stringify(metas));
        }
      } else {
        if (atividades && atividades[jogadorLogado]) {
          let atividade = atividades[jogadorLogado].find(a => a.id === item.id);
          atividade.pendente = false;
          localStorage.setItem("atividades", JSON.stringify(atividades));
        }
      }
      alert(`Tarefa ${item.id} negada.`);
      card.remove();
    };

    lista.appendChild(card);
  });
}

function contabilizaPontos(tarefa, jogadorLogado) {
  let jogadores = JSON.parse(localStorage.getItem("jogadores"));
  let jogador = jogadores.find(jogador => jogador.nickname === jogadorLogado);
  jogador.xp += tarefa.xp;
  jogador.moedas += tarefa.moedas;
  jogador.historico_moedas += tarefa.moedas;
  jogador.nivel = Math.floor(jogador.xp / 100);
  
  localStorage.setItem("jogadores", JSON.stringify(jogadores));
}

renderizarPendentes();