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

  if (!Array.isArray(jogador.historico_moedas)) {
    jogador.historico_moedas = [];
  }

  jogador.xp -= xp;
  jogador.moedas -= moedas;

  if (jogador.xp < 0) jogador.xp = 0;
  if (jogador.moedas < 0) jogador.moedas = 0;

  jogador.historico_moedas.push({
    tipo: "penalidade",
    descricao: titulo,
    xp: -xp,
    moedas: -moedas,
    data: new Date().toISOString().slice(0, 10)
  });

  localStorage.setItem("jogadores", JSON.stringify(jogadores));

  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-penalidades/pagina-penalidades.html";
  }, 2000);
}
