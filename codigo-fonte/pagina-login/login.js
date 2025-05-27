carregaComponente(
  '../global/componentes/cabecalho/cabecalho.html',
  'cabecalho-global',
  '../global/componentes/cabecalho/cabecalho.js',
);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const [nickname, senha] = inputs;
    
    const contas = JSON.parse(localStorage.getItem('contas')) || [];

    const conta = contas.find(conta => conta.nickname === nickname.value);
    if (conta) {
      if (conta.senha === senha.value) {
        if(conta.tipo ==='filho'){
          localStorage.setItem('jogadorLogado', conta.nickname);
          window.location.href = '../pagina-checklist/pagina-checklist.html';
        } else if(conta.tipo ==='responsavel'){
          let jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
          const jogador = jogadores.find(jogador => jogador.responsavel === conta.nickname);
          if (jogador) {
            localStorage.setItem('jogadorLogado', jogador.nickname);
          }
          window.location.href = '../pagina-home/pagina-home.html';
        }
      } else {
        alert('Senha incorreta!');
        return;
      }
    } else {
      alert('O nickname não foi encontrado!');
      return;
    }
  })
})