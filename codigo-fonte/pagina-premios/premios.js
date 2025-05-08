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

// Processo:
// - Primeiro, consulta se já existe o objeto premios no localstorage, senão, deixa a página vazia
document.addEventListener("DOMContentLoaded", () => {
  let premios = localStorage.getItem("premios");
  if(premios) {
    // - Depois, consulta se já existe a propriedade do jogadorLogado no objeto premios, senão, deixa a página vazia
    const jogadorLogado = localStorage.getItem("jogadorLogado");
    premios = JSON.parse(premios);
    if(premios[jogadorLogado]) {
      // - Caso existam, preenche o HTML de forma dinâmica (com um loop) percorrendo o array de premios do jogadorLogado, exibindo cada dado em uma tag HTML por meio dos IDS
      const divPremios = document.getElementById("lista-premios");

      // - Para cada premio, é preciso fazer uma conta pra exibir a barra de progresso:
      //   - Consultar o xp atual do usuário usando o array jogadores + chave jogadorLogado
      const jogadores = JSON.parse(localStorage.getItem("jogadores")) || {};

      const xp_atual = jogadores.find(
        (jogador) => jogador.nickname === jogadorLogado
      ).xp;

      
      premios[jogadorLogado].forEach(premio => {
        //   - Subtrair o xp_inicio - xp atual para entender quantos xps o jogador já ganhou desde que o premio foi cadastrado
        let diferenca_xp = (premio.xp_inicio - xp_atual) * -1;
        //   - Pegar a porcentagem desse valor subtraído frente ao que ele precisa ganhar
        //   - Editar no css o quanto a barra deve estar preenchida pela porcentagem 
        let porcentagem = diferenca_xp * 100 / premio.xp;
        // - Também é preciso lidar com a variável conquistado, para exibir ou não uma tag de conquistado no premio

        divPremios.innerHTML += `
          <div class="premio">
            <div class="linha-premio">
              <h3 class="titulo-premio">${premio.titulo}</h3>
              <div class="info-premio">
                ${premio.conquistado ?
                  `<span class="tag transparente">
                    <img src="../global/imagens/coroa.svg" alt="coroa">
                    Conquistado!
                  </span>` : ""
                }
                <div class="xp">
                  <img src="../global/imagens/xp.svg" alt="XP" />
                  <span>${premio.xp}</span>
                </div>
                <div class="moedas">
                  <img src="../global/imagens/moeda.svg" alt="Moedas" />
                  <span>${premio.moedas}</span>
                </div>
              </div>
            </div>
            <div class="container-progresso">
              <div class="barra-progresso" style="width:${porcentagem}%;"></div>
            </div>
          </div>
        `
      });
    }
  }
})
