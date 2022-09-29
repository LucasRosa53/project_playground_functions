// Desafio 1

function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else
    return false;

}

// Desafio 2

function calcArea(base, height) {
  calcArea = base * height / 2;
  return calcArea;

}


// Desafio 3

function splitSentence(string) {
  splitSentence = string.split(" ");
  return splitSentence;
}


// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];

}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;

}


// Desafio 6
function highestCount(array) {

  let maiorNumero = array[0]
  let repetidor = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index]
    }
  }
  for (let index = 0; index < array.length; index += 1)
    if (array[index] === maiorNumero) {
      repetidor += 1;
    }
  return repetidor;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse); // descoberto a distância cat1 do mouse
  let distance2 = Math.abs(cat2 - mouse); // descoberto a distância cat2 do mouse

  if (distance2 < distance1) {
    return 'cat2';
  } else if (distance1 < distance2) {
    return 'cat1';
  } else
    return 'os gatos trombam e o rato foge';

}


// Desafio 8

let retornar = [];
function fizzBuzz(numero) {
  
  for (let index = 0; index < numero.length; index += 1) {
    if (numero[index] % 3 === 0 && numero[index] % 5 === 0) {
      retornar.push('fizzBuzz');
    } else if (numero[index] % 5 === 0) {
      retornar.push('buzz');
    } else if (numero[index] % 3 === 0) {
      retornar.push('fizz');
    } else
      retornar.push('bug!');
  }
  return retornar;
}
console.log(fizzBuzz(9, 25));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
