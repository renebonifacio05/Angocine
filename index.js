<!-- Tela de login -->
<div id="loginContainer">
  <input type="password" id="codigoInput" placeholder="Digite o código de acesso">
  <button id="btnContinuar">Entrar</button>
</div>

<!-- Conteúdo do site -->
<div id="conteudoSite" style="display:none;">
  <h1>Bem-vindo ao site!</h1>
  <p>Esse é o conteúdo protegido.</p>
</div>

<script>
// Lista de códigos ativos
const codigosAtivos = [
  { codigo: "Rene123", ativo: true },
  { codigo: "CORK456", ativo: false },
  { codigo: "CORK789", ativo: true },
  { codigo: "Gina123", ativo: true },
  { codigo: "Airesa", ativo: true },
];

function verificarCodigo() {
  const codigoInput = document.getElementById("codigoInput");
  if (!codigoInput) return;

  const codigo = codigoInput.value.trim();
  const usuario = codigosAtivos.find(u => u.codigo === codigo);

  if (usuario && usuario.ativo) {
    // Ocultar login e mostrar conteúdo
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("conteudoSite").style.display = "block";
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

  // Força sempre mostrar o login ao abrir o site
  document.getElementById("loginContainer").style.display = "block";
  document.getElementById("conteudoSite").style.display = "none";
});
</script>
