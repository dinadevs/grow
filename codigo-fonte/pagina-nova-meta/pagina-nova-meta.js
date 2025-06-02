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

document.addEventListener('DOMContentLoaded', function() {
    const dataInicioInput = document.getElementById('data-inicio');
    const dataFimInput = document.getElementById('data-fim');

    function formatarDataParaInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    const hoje = new Date();
    dataInicioInput.min = formatarDataParaInput(hoje);

    dataInicioInput.addEventListener('change', function() {
        const dataInicioSelecionada = new Date(this.value + 'T00:00:00');
        
        dataFimInput.min = formatarDataParaInput(dataInicioSelecionada);


        if (dataFimInput.value) { 
            const dataFimAtual = new Date(dataFimInput.value + 'T00:00:00');
            if (dataFimAtual < dataInicioSelecionada) {
                dataFimInput.value = ''; 
          
            }
        }
    });
});


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
  const dataInicio = dadosForm.get("dataInicio");
  const xp = dadosForm.get("xp");
  const moedas = dadosForm.get("moedas");
  const dataFim = dadosForm.get("dataFim");

  let id = 0;
  if (metas[jogadorLogado].length > 0) {
    const ultimaPosicao = metas[jogadorLogado].length - 1;
    id = metas[jogadorLogado][ultimaPosicao]["id"] + 1;
  }

  metas[jogadorLogado].push({
    id,
    titulo,
    xp,
    moedas,
    inicio: dataInicio,
    fim: dataFim,
    concluido: false,
    pendente: false,
  });

  localStorage.setItem("metas", JSON.stringify(metas));

  mostraToast();

  setTimeout(() => {
    window.location.href = "../pagina-metas/pagina-metas.html";
  }, 4000);
}
