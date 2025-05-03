const mockPendentes = [
    { id: 1, titulo: "Lavar a louça", xp: 10, moedas: 5, aprovado: false },
    { id: 2, titulo: "Arrumar o quarto", xp: 15, moedas: 10, aprovado: false },
    { id: 3, titulo: "Fazer a lição de casa", xp: 20, moedas: 8, aprovado: false },
    { id: 4, titulo: "Tirar o lixo", xp: 5, moedas: 3, aprovado: false },
    { id: 5, titulo: "Cuidar do cachorro", xp: 12, moedas: 6, aprovado: false },
    { id: 6, titulo: "Dobrar as roupas", xp: 8, moedas: 4, aprovado: false }
  ];
  
  if (!localStorage.getItem("atividades")) {
    localStorage.setItem("atividades", JSON.stringify(mockPendentes));
  }
  