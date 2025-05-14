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

function salvarPremio(e) {
  e.preventDefault();
  
  const premios = JSON.parse(localStorage.getItem("premios")) || {};

  const jogadorLogado = localStorage.getItem("jogadorLogado");
  if (!jogadorLogado) return alert("Nenhum jogador logado!");

  if (!premios[jogadorLogado]) {
    premios[jogadorLogado] = [];
  }

  const form = document.getElementById("novo-premio");
  const dadosForm = new FormData(form);

  const titulo = dadosForm.get("titulo");
  const xp = parseInt(dadosForm.get("xp"));
  const moedas = parseInt(dadosForm.get("moedas"));

  let id = 0;

  if (premios[jogadorLogado].length > 0) {
    const ultimaPosicao = premios[jogadorLogado].length - 1;
    id = premios[jogadorLogado][ultimaPosicao]["id"] + 1;
  }

  const jogadores = JSON.parse(localStorage.getItem("jogadores")) || {};

  const xp_inicio = jogadores.find(
    (jogador) => jogador.nickname === jogadorLogado
  ).xp;

  premios[jogadorLogado].push({
    id,
    titulo,
    xp,
    moedas,
    xp_inicio,
    conquistado: false,
  });

  
  localStorage.setItem("premios", JSON.stringify(premios));
  
  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-premios/premios.html";
  }, 4000);
}