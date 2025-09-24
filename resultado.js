document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const termo = params.get("busca")?.toLowerCase() || "";
  const container = document.getElementById("resultados");

  container.innerHTML = ""; // limpa

  if (!termo) {
    container.innerHTML = '<p style="color:white; text-align:center;">Nenhuma pesquisa feita.</p>';
    return;
  }

  const resultados = catalogo.filter(item => item.titulo.toLowerCase().includes(termo));

  if (resultados.length === 0) {
    container.innerHTML = '<p style="color:white; text-align:center;">Nenhum resultado encontrado.</p>';
    return;
  }

  resultados.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    const tipoClasse = item.tipo ? item.tipo.toLowerCase() : "";

    card.innerHTML = `
      <span class="tag ${tipoClasse}">${item.tipo || ""}</span>
      <a href="${item.link}" class="card-link">
        <img src="${item.capa}" alt="${item.titulo}">
        <p>${item.titulo}</p>
      </a>
    `;

    container.appendChild(card);
  });
});