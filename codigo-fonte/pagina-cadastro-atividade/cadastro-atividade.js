carregaComponente('../global/componentes/cabecalho/cabecalho.html', 'cabecalho-global', '../global/componentes/cabecalho/cabecalho.js');
carregaComponente('../global/componentes/barra-status/barra-status.html', 'barra-status', '../global/componentes/barra-status/barra-status.js');



function salvarAtividade(e) {
  e.preventDefault(); 

  const atividades = JSON.parse(localStorage.getItem("Atividades")) || {}; 

  const jogadorLogado = localStorage.getItem("jogadorLogado");

  if (!jogadorLogado) return alert("Nenhum jogador logado!");

  if (!atividades[jogadorLogado]) {
    atividades[jogadorLogado] = []; 
  } 

  