
let ligada = false;

const botao = document.querySelector("#interruptor");
const lampada = document.querySelector("#lampada");
const aviso = document.querySelector("#aviso");

botao.addEventListener("click", function () {

  ligada = !ligada;

  if (ligada) {
    lampada.textContent = "💡";
    aviso.textContent = "✨ Luz acesa! Ambiente iluminado.";
    botao.innerHTML = "⚡ Desligar luz";

    document.body.classList.add("acesa");

  } else {
    lampada.textContent = "🌑";
    aviso.textContent = "A luz está apagada. Clique para acender.";
    botao.innerHTML = "⚡ Ligar luz";

    document.body.classList.remove("acesa");
  }

});
