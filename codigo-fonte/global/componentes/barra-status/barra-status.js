function atualizarBarraStatus() {
    const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];
    const logado    = localStorage.getItem('jogadorLogado');
  
    if (!jogadores[logado]) return;
  
    const avatarName = jogadores[logado].avatar; 
    const img        = document.getElementById('avatar');
  
    img.src = `../../codigo-fonte/global/imagens/avatar-${avatarName}.png`;
    img.alt = `Avatar de ${avatarName}`;
  }
  
  atualizarBarraStatus();