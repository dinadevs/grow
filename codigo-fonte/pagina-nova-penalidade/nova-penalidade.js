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

function salvarPenalidade(e) {
  e.preventDefault();

const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
const jogadorLogado = localStorage.getItem("jogadorLogado");

const jogador = jogadores.find(j => j.nickname === jogadorLogado);

if (!jogadorLogado || !jogador) {
  return alert("Nenhum jogador logado!");
}

  const form = document.getElementById("nova-penalidade");
  const dadosForm = new FormData(form);

  const titulo = dadosForm.get("titulo");
  const xp = parseInt(dadosForm.get("xp"));
  const moedas = parseInt(dadosForm.get("moedas"));

  
  const confirmacao = confirm(
    `Tem certeza que deseja aplicar essa penalidade?\n\nSerá subtraído:\n- ${xp} XP\n- ${moedas} moedas\n\ndo(a) jogador(a).`
  );

  if (!confirmacao) {
    return; 
  }

  jogador.xp -= xp;
  jogador.moedas -= moedas;
  jogador.nivel = Math.floor(jogador.xp / 100);

  if (jogador.xp < 0) jogador.xp = 0;
  if (jogador.moedas < 0) jogador.moedas = 0;

 localStorage.setItem("jogadores", JSON.stringify(jogadores));

  let penalidades = JSON.parse(localStorage.getItem("penalidades")) || {};

  if (!Array.isArray(penalidades[jogadorLogado])) {
    penalidades[jogadorLogado] = [];
  }

  let id = 1;
  const penalidadeList = penalidades[jogadorLogado];
  if (penalidadeList.length > 0) {
    id = penalidadeList[penalidadeList.length - 1].id + 1;
  }

  penalidadeList.push({
    id: id,
    titulo: titulo,
    xp: xp,
    moedas: moedas,
    exibida: false,
    data: new Date().toISOString().slice(0, 10)
  });

  penalidades[jogadorLogado] = penalidadeList;
  localStorage.setItem("penalidades", JSON.stringify(penalidades));

  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-penalidades/pagina-penalidades.html";
  }, 2000);
}
