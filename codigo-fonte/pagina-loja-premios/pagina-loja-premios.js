document.addEventListener("DOMContentLoaded", () => {
  const premios = [
    { id: 1, titulo: "Bola mágica", moedas: 500, xp: 400 },
    { id: 2, titulo: "Espada pixel", moedas: 300, xp: 250 },
    { id: 3, titulo: "Chapéu lendário", moedas: 200, xp: 150 }
  ];

  const lista = document.getElementById("lista-premios");

  premios.forEach(premio => {
    const item = document.createElement("li");
    item.className = "premio";

    item.innerHTML = `
      <div class="info-premio">
        <p class="titulo-premio">${premio.titulo}</p>
        <div class="recompensas">
          <span><img src="../global/imagens/moeda.svg" alt="moeda"> ${premio.moedas}</span>
          <span><img src="../global/imagens/xp.svg" alt="xp"> ${premio.xp} XP</span>
        </div>
      </div>
      <button class="botao-comprar">Comprar</button>
    `;

    lista.appendChild(item);
  });
});
