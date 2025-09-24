// Seleciona elementos
const searchIcon = document.getElementById("search-icon");
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

// Clicar na lupa → mostra ou esconde o campo de pesquisa
searchIcon.addEventListener("click", () => {
  if (searchInput.style.display === "none") {
    searchInput.style.display = "inline-block";
    searchInput.style.width = "60%";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
    searchInput.value = "";
    cards.forEach(card => card.style.display = ""); // reseta
  }
});

// Filtrar os cards conforme o texto digitado
searchInput.addEventListener("keyup", function() {
  const filter = searchInput.value.toLowerCase();

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();
    if (text.includes(filter)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});