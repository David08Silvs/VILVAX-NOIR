// Pequenos comportamentos da página inicial.
document.addEventListener("DOMContentLoaded", () => {
  // Fecha o menu mobile depois de selecionar uma âncora da própria página.
  const navCollapse = document.getElementById("mainNavigation");
  const navLinks = document.querySelectorAll('#mainNavigation a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.bootstrap && navCollapse.classList.contains("show")) {
        window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Mantém a navegação acessível quando o utilizador usa a tecla Escape.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navCollapse?.classList.contains("show")) {
      window.bootstrap?.Collapse.getOrCreateInstance(navCollapse).hide();
    }
  });
});