function verificarCodigo() {
  const codigoInput = document.getElementById("codigoInput");
  if (!codigoInput) return;

  const codigo = codigoInput.value.trim();
  const usuario = codigosAtivos.find(u => u.codigo === codigo);

  if (usuario && usuario.ativo) {
    // Salva no sessionStorage só para esta aba
    sessionStorage.setItem("autenticado", "true");
    window.location.href = "home.html"; // vai para home
  } else {
    alert("Código incorreto ou desativado!");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('btnContinuar');
  const input = document.getElementById('codigoInput');

  if (btn) {
    btn.addEventListener('click', verificarCodigo);
  }

  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        verificarCodigo();
      }
    });
  }

  // 🔒 Se estiver na home.html e não tiver login válido, volta para o login
  if (window.location.pathname.includes("home.html") && sessionStorage.getItem("autenticado") !== "true") {
    window.location.href = "index.html"; // volta para a tela de login
  }
});
