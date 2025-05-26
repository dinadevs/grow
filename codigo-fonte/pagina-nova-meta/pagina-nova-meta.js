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

function salvarMeta(e) {
  e.preventDefault();

  const metas = JSON.parse(localStorage.getItem("metas")) || {};
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  if (!jogadorLogado) return alert("Nenhum jogador logado!");

  if (!metas[jogadorLogado]) {
    metas[jogadorLogado] = [];
  }

  const form = document.getElementById("nova-meta");
  const dadosForm = new FormData(form);

  const titulo = dadosForm.get("titulo");
  const progresso = parseInt(dadosForm.get("progresso")); // em porcentagem
  const prazo = dadosForm.get("prazo"); // você pode validar formato depois

  let id = 0;
  if (metas[jogadorLogado].length > 0) {
    const ultimaPosicao = metas[jogadorLogado].length - 1;
    id = metas[jogadorLogado][ultimaPosicao]["id"] + 1;
  }

  metas[jogadorLogado].push({
    id,
    titulo,
    progresso,
    prazo,
    concluida: false,
  });

  localStorage.setItem("metas", JSON.stringify(metas));

  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-checklist/checklist.html";
  }, 4000);
}
