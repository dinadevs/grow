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

document.addEventListener('DOMContentLoaded', function() {
  const jogadorLogado = localStorage.getItem('jogadorLogado'); // Obtém o jogador logado
  const containerPremios = document.getElementById('container-premios'); // O contêiner onde os prêmios serão inseridos

  // Verifica se o jogador tem prêmios cadastrados
  let premios = JSON.parse(localStorage.getItem('premios')) || {};

  if (premios[jogadorLogado]) {
    // Exibe os prêmios cadastrados para o jogador
    const premiosDoJogador = premios[jogadorLogado];
    premiosDoJogador.forEach(premio => {
      const divPremio = document.createElement('div');
      divPremio.classList.add('premio-card');

      const linhaPremio = document.createElement('div');
      linhaPremio.classList.add('linha-premio');

      const tituloPremio = document.createElement('h3');
      tituloPremio.classList.add('titulo-premio');
      tituloPremio.textContent = premio.titulo;

      const infoPremio = document.createElement('div');
      infoPremio.classList.add('info-premio');

      const moedas = document.createElement('div');
      moedas.classList.add('moedas');
      const imgMoeda = document.createElement('img');
      imgMoeda.src = "../global/imagens/moeda.svg";
      const spanMoedas = document.createElement('span');
      spanMoedas.textContent = premio.moedas;
      moedas.appendChild(imgMoeda);
      moedas.appendChild(spanMoedas);

      const xp = document.createElement('div');
      xp.classList.add('xp');
      const imgXp = document.createElement('img');
      imgXp.src = "../global/imagens/xp.svg";
      const spanXp = document.createElement('span');
      spanXp.textContent = premio.xp;
      xp.appendChild(imgXp);
      xp.appendChild(spanXp);

      infoPremio.appendChild(moedas);
      infoPremio.appendChild(xp);

      linhaPremio.appendChild(tituloPremio);
      linhaPremio.appendChild(infoPremio);

      const containerProgresso = document.createElement('div');
      containerProgresso.classList.add('container-progresso');
      const barraProgresso = document.createElement('div');
      barraProgresso.classList.add('barra-progresso');
      barraProgresso.style.width = `${(premio.xpAtual / premio.xp) * 100}%`; // Progresso da barra
      containerProgresso.appendChild(barraProgresso);

      divPremio.appendChild(linhaPremio);
      divPremio.appendChild(containerProgresso);

      containerPremios.appendChild(divPremio);
    });
  } else {
    const mensagem = document.createElement('p');
    mensagem.textContent = 'Nenhum prêmio cadastrado.';
    containerPremios.appendChild(mensagem);
  }
});
