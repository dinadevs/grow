async function carregaComponente(caminhoHTML, id, caminhoJS) {
  // Carrega o HTML
  const res = await fetch(caminhoHTML);
  const html = await res.text();

  // Injeta o HTML na página
  document.getElementById(id).innerHTML = html;

  // Cria e carrega o script
  const script = document.createElement('script');
  script.src = caminhoJS;
  document.body.appendChild(script);
}

// -- popups --

const botaoAbrir = document.getElementById('abrir-popup');

// só segue quando existe na página botão de abrir popup
if (botaoAbrir) { 
  const botaoFechar = document.getElementById('fechar-popup');
  const popup = document.getElementById('popup');

  botaoAbrir.addEventListener('click', () => {
    popup.classList.remove('oculta');
  });
  
  botaoFechar.addEventListener('click', () => {
    popup.classList.add('oculta');
  });
  
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.classList.add('oculta');
    }
  });
}