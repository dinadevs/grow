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

// Recupera o jogador logado
const jogadorLogado = localStorage.getItem('jogadorLogado');

// Verifica se já existe o objeto premios no localStorage
let premios = JSON.parse(localStorage.getItem('premios')) || {};

// Se não existir a propriedade do jogador no objeto premios, cria um array vazio para ele
if (!premios[jogadorLogado]) {
  premios[jogadorLogado] = [];
}

// Recupera o XP atual do jogador
const jogadores = JSON.parse(localStorage.getItem('jogadores')) || {};
const xp_inicio = jogadores[jogadorLogado]?.xp || 0;

// Pega os dados do formulário
const tituloDoFormulario = document.getElementById('titulo').value;  // Exemplo: título do prêmio
const valorXp = parseInt(document.getElementById('xp').value);  // Exemplo: XP do prêmio
const valorMoedas = parseInt(document.getElementById('moedas').value);  // Exemplo: Moedas do prêmio

// Gera o novo ID do prêmio
const ultimoPremio = premios[jogadorLogado].slice(-1)[0];
const novoId = ultimoPremio ? ultimoPremio.id + 1 : 0;

// Cria o objeto do novo prêmio
const novoPremio = {
  id: novoId,
  titulo: tituloDoFormulario,
  xp: valorXp,
  moedas: valorMoedas,
  xp_inicio,
  conquistado: false
};

// Adiciona o novo prêmio ao array de prêmios do jogador
premios[jogadorLogado].push(novoPremio);

// Salva os dados atualizados no localStorage
localStorage.setItem('premios', JSON.stringify(premios));

// Exibe mensagem de sucesso ou redireciona para outra página (se necessário)
alert('Prêmio cadastrado com sucesso!');
