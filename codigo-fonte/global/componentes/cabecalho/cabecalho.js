function sair() {
  localStorage.removeItem("jogadorLogado");
  window.location.href = "../pagina-login/login.html";
}