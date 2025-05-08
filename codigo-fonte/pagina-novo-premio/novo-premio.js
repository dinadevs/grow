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
  // - Primeiro, consulta se já existe o objeto premios no localstorage, senão, cria-se
  const premios = JSON.parse(localStorage.getItem("premios")) || {};

  // - Depois, consulta se já existe a propriedade do jogadorLogado no objeto premios, senão, cria-se com um array vazio
  const jogadorLogado = localStorage.getItem("jogadorLogado");
  if (!jogadorLogado) return alert("Nenhum jogador logado!");

  if (!premios[jogadorLogado]) {
    premios[jogadorLogado] = [];
  }

  // - Salva o premio vindo do formulário no array de premios do usuário, usando o jogadorLogado como chave

  const form = document.getElementById("novo-premio");
  const dadosForm = new FormData(form);

  const titulo = dadosForm.get("titulo");
  const xp = parseInt(dadosForm.get("xp"));
  const moedas = parseInt(dadosForm.get("moedas"));

  //   - Para salvar a propriedade id, deve-se:
  //   - Pegar o id do último prêmio e somar 1
  //   - Se não tiver outros prêmios, o id é 0
  let id = 0;

  if (premios[jogadorLogado].length > 0) {
    const ultimaPosicao = premios[jogadorLogado].length - 1;
    id = premios[jogadorLogado][ultimaPosicao]["id"] + 1;
  }

  // - Para salvar a propriedade xp_inicio, deve-se:
  //   - Consultar o xp atual do usuário usando o array jogadores + chave jogadorLogado

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
  
  // - Lembrar de inserir o toast de cadastro feito
  
  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-premios/premios.html";
  }, 4000);
}
