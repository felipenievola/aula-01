window.addEventListener("DOMContentLoaded", () => {
  const botoes = Array.from(document.querySelectorAll(".botao"));
  const abas = Array.from(document.querySelectorAll(".aba-conteudo"));
  const contadores = document.querySelectorAll(".contador");

  function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  const hoje = new Date();
  const anoAtual = hoje.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  const tempoObjetivo1 = new Date(anoAtual, mesAtual, diaAtual + aleatorio(5, 12), 14, 20, 45);
  const tempoObjetivo2 = new Date(anoAtual, mesAtual, diaAtual + 401, 0, 61, 0);
  const tempoObjetivo3 = new Date(anoAtual, mesAtual, diaAtual + aleatorio(30, 40), 19, 55, 15);
  const tempoObjetivo4 = new Date(anoAtual, mesAtual, diaAtual + aleatorio(50, 60), 12, 30, 50);
  const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

  function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo.getTime() - tempoAtual.getTime();

    if (tempoFinal <= 0) {
      return "Objetivo concluído!";
    }

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;
  }

  function atualizaContadores() {
    contadores.forEach((contador, indice) => {
      contador.textContent = calculaTempo(tempos[indice]);
    });
  }

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

  atualizaContadores();
  setInterval(atualizaContadores, 1000);
  mostrarAba(-1);
});