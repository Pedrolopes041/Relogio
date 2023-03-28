const hoursHand = document.querySelector(".ponteiro.horas");
const minutesHand = document.querySelector(".ponteiro.minutos");
const secondsHand = document.querySelector(".ponteiro.secundos");

const setClock = () => {
  const dataAtual = new Date(); //pegando a data atual

  // pegando a hora, minuto e secundo da data atual
  const secondsPercentage = dataAtual.getSeconds() / 60; // de segundos para minutos é 60segundos
  const minutesPercentage = (secondsPercentage + dataAtual.getMinutes()) / 60; // de minutos para horas é 60minutos
  const hoursPercentage = (minutesPercentage + dataAtual.getHours()) / 12; // de uma em uma hora até circular o relogio é 12horas

  setRotation(secondsHand, secondsPercentage);
  setRotation(minutesHand, minutesPercentage);
  setRotation(hoursHand, hoursPercentage);
};

//definindo a rotação
const setRotation = (element, rotationPercentage) => { // dois parametros o 1 para o elemento que vai ser alterado e o segundo é a porcentagem de rotação
  element.style.setProperty("--rotation", rotationPercentage * 360); // definindo propriedades do elemento que vai ser a variavel rotation e o rotation * 360
};

setClock();

setInterval(setClock, 1000); // fala que o setClock vai ser chamado a cada 1 segundo 