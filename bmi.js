const readlineSync = require('readline-sync');

const calculaIMC = (peso, altura) => {
  const calculo = peso / (altura * altura);
  return calculo;
};

const engine = () => {
  const peso = readlineSync.questionFloat('What’s your weight?');
  const altura = readlineSync.questionFloat('What’s your height?');
  const result = calculaIMC(peso, altura);

  switch (true) {
    case (result < 18.5):
      console.log('magreza');
      break;
    case (result >= 18.5 && result < 25):
      console.log('Peso normal');
      break;
    case (result >= 25.0 && result < 30):
      console.log('sobrepeso');
      break;
    case (result >= 30 && result < 35):
      console.log('Obesidade grau I');
      break;
    case (result >= 35 && result < 40):
      console.log('Peso normal');
      break;
    default: console.log('Obesidade graus III e IV')
  }
}

engine();