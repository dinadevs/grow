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

    // Função para formatar a data para o formato 'YYYY-MM-DD' exigido pelo input type="date"
    // Garante que o mês e o dia tenham dois dígitos (ex: 01, 09)
    function formatarDataParaInput(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês é 0-indexed, então +1
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    // 1. Definir a data mínima para "Data Início" como o dia atual ao carregar a página
    const hoje = new Date();
    dataInicioInput.min = formatarDataParaInput(hoje);

    // 2. Adicionar um "listener" para quando a "Data Início" mudar
    dataInicioInput.addEventListener('change', function() {
        // Cria um objeto Date da data selecionada em 'data-inicio'.
        // Adiciona 'T00:00:00' para evitar problemas de fuso horário que podem
        // fazer com que a data seja interpretada como o dia anterior.
        const dataInicioSelecionada = new Date(this.value + 'T00:00:00');
        
        // Define a data mínima para "Data Fim" como a "Data Início" selecionada
        dataFimInput.min = formatarDataParaInput(dataInicioSelecionada);

        // Opcional: Se a "Data Fim" já foi selecionada e é anterior à nova "Data Início",
        // limpa o campo "Data Fim" para forçar o usuário a selecionar uma data válida novamente.
        if (dataFimInput.value) { // Verifica se já existe um valor em dataFim
            const dataFimAtual = new Date(dataFimInput.value + 'T00:00:00');
            if (dataFimAtual < dataInicioSelecionada) {
                dataFimInput.value = ''; // Limpa a data de fim
                // Ou você pode definir: dataFimInput.value = this.value; para que a data de fim seja igual à de início por padrão
            }
        }
    });
});
// --- Fim da Lógica de Validação de Datas ---

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
  const progresso = parseInt(dadosForm.get("progresso")); 
  const prazo = dadosForm.get("prazo"); 

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
