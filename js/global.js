/* =========================
   CONTROLE DE TEMA (DARK MODE)
========================= */

function toggleDark() {
    const ativo = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", ativo);
    atualizarIconeTema();
}

function aplicarTema() {
    const darkAtivo = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", darkAtivo);
    atualizarIconeTema();
}

function atualizarIconeTema() {
    const btn = document.getElementById("darkBtn");
    if (!btn) return;

    const darkAtivo = document.documentElement.classList.contains("dark");
    btn.innerText = darkAtivo ? "☀️" : "🌙";
}

/* =========================
   CONTROLE DE LOGIN
========================= */

function estaLogado() {
    return localStorage.getItem("logado") === "true";
}

function sair() {
    localStorage.removeItem("logado");
    window.location.href = "login.html";
}

function atualizarMenu() {
    const menuLogin = document.getElementById("menuLogin");
    const menuRegistro = document.getElementById("menuRegistro");

    if (!menuLogin || !menuRegistro) return;

    if (estaLogado()) {
        menuRegistro.innerHTML = '<a href="registro.html">Registrar</a>';
        menuLogin.innerHTML = '<button onclick="sair()">Sair</button>';
    } else {
        menuRegistro.innerHTML = '';
        menuLogin.innerHTML = '<a href="login.html">Login</a>';
    }
}

/* =========================
   INICIALIZAÇÃO GLOBAL
========================= */

document.addEventListener("DOMContentLoaded", () => {
    aplicarTema();
    atualizarMenu();
});