carregaComponente('../global/componentes/cabecalho/cabecalho.html', 'cabecalho-global', '../global/componentes/cabecalho/cabecalho.js');
carregaComponente('../global/componentes/barra-status/barra-status.html', 'barra-status', '../global/componentes/barra-status/barra-status.js');



function salvarAtividade(e) {
  e.preventDefault(); 

  const atividades = JSON.parse(localStorage.getItem("atividades")) || {}; 

  const jogadorLogado = localStorage.getItem("jogadorLogado");

  if (!jogadorLogado) return alert("Nenhum jogador logado!");

  if (!atividades[jogadorLogado]) {
    atividades[jogadorLogado] = []; 
  } 

  const form = document.getElementById("nova-atividade");
  const dadosForm = new FormData(form);

  const titulo = dadosForm.get("titulo");
  const xp = parseInt(dadosForm.get("xp"));
  const moedas = parseInt(dadosForm.get("moedas"));
  const recorrencia = dadosForm.get("recorrencia");

  let id=0;

  if(atividades[jogadorLogado].length > 0) {
    const ultimaPosicao = atividades[jogadorLogado].length - 1; 
    id = atividades[jogadorLogado][ultimaPosicao]["id"] + 1;
  }

  const unica = recorrencia === "unica"; // ou use um campo no formulário
  const dia = recorrencia === "semanal" ? new Date().getDay() : null;
  const jogadores = JSON.parse(localStorage.getItem("jogadores")) ||{};

 atividades[jogadorLogado].push({
  id, 
  titulo,
  xp,
  moedas,
  recorrencia,
  concluido:false,
  unica,
  dia
  
 }); 


 localStorage.setItem("atividades",JSON.stringify(atividades));
 
 mostraToast();

 setTimeout(() => {
  window.location.href = "../pagina-checklist/pagina-checklist.html"
 },4000);
}