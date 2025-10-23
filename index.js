// Lista de códigos ativos
const codigosAtivos = [
  { codigo: "Rene123", ativo: true },
  { codigo: "Rene124", ativo: true },
  { codigo: "CORK456", ativo: false },
  { codigo: "CORK789", ativo: true },
  { codigo: "Gina123", ativo: true },
  { codigo: "Aires", ativo: true },
];

function verificarCodigo() {
  const codigoInput = document.getElementById("codigoInput");
  if (!codigoInput) return;

  const codigo = codigoInput.value.trim();
  const usuario = codigosAtivos.find(u => u.codigo === codigo);

  if (usuario && usuario.ativo) {
    sessionStorage.setItem("autenticado", "true"); // ✅ marca que fez login
    window.location.href = "home.html"; // página principal
  } else {
    alert("Código incorreto ou desativado!");
  }
}

// Função de logout (opcional)
function logout() {
  sessionStorage.removeItem("autenticado");
  window.location.href = "index.html";
}

window.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnContinuar");
  const input = document.getElementById("codigoInput");

  if (btn) {
    btn.addEventListener("click", verificarCodigo);
  }

  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        verificarCodigo();
      }
    });
  }

  // 🔒 Protege automaticamente todas as páginas, menos index.html
  const pagina = window.location.pathname;
  if (!pagina.includes("index.html")) {
    const autenticado = sessionStorage.getItem("autenticado");
    if (autenticado !== "true") {
      window.location.href = "index.html"; // redireciona para login
    }
  }
});
