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