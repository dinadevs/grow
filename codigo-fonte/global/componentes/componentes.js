async function carregaComponente(caminhoHTML, id, caminhoJS) {
  try {

    const res = await fetch(caminhoHTML);
    if (!res.ok) throw new Error(`Erro ao carregar ${caminhoHTML}`);
    const html = await res.text();

    const container = document.getElementById(id);
    if (!container) throw new Error(`Elemento com id '${id}' não encontrado.`);
    container.innerHTML = html;
    
    if (!document.querySelector(`script[src="${caminhoJS}"]`)) {
      const script = document.createElement('script');
      script.src = caminhoJS;
      document.body.appendChild(script);
    }
  } catch (err) {
    console.error(`Falha ao carregar componente: ${err.message}`);
  }
}
