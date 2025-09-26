// Lista de códigos ativos
const codigosAtivos = [
  { codigo: "Rene123", ativo: true },
  { codigo: "CORK456", ativo: false },
  { codigo: "CORK789", ativo: true },
  { codigo: "Gina123", ativo: true },
  { codigo: "Edson", ativo: true },
  { codigo: "Airesa", ativo: true },
];

function verificarCodigo() {
  const codigoInput = document.getElementById("codigoInput");
  if (!codigoInput) return;

  const codigo = codigoInput.value.trim();
  const usuario = codigosAtivos.find(u => u.codigo === codigo);

  if (usuario && usuario.ativo) {
    window.location.href = "home.html"; // página principal
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

  // 🔒 NOVA FUNCIONALIDADE: força sempre abrir a tela de login
  sessionStorage.removeItem("usuarioLogado");
});

