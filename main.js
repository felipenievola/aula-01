window.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll(".botao");

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoes.forEach((item) => item.classList.remove("ativo"));
      botao.classList.add("ativo");
    });
  });
});