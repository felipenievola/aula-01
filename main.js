window.addEventListener("DOMContentLoaded", () => {
  const botoes = Array.from(document.querySelectorAll(".botao"));
  const abas = Array.from(document.querySelectorAll(".aba-conteudo"));

  function mostrarAba(indice) {
    botoes.forEach((botao, posicao) => {
      botao.classList.toggle("ativo", posicao === indice);
    });

    abas.forEach((aba, posicao) => {
      aba.classList.toggle("ativo", posicao === indice);
    });
  }

  botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => mostrarAba(indice));
  });

  mostrarAba(-1);
});