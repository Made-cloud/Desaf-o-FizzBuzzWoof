// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
  let resultados = [];

const prompt = require("prompt-sync")();

const limite = parseInt(prompt("ingresa hasta que número deseas contar (1-105): "));
if (limite < 1 || limite > 105) {
  console.log("Error. Ingrese SOLO un número entre 1 y 105");
  return;
}

for (let i = 1; i <= limite; i++) {
  let esPrimo = true;
  
  if (i < 2) esPrimo = false;
  else {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  
  if (esPrimo) {
    let palabraIndex = (i - 1) % buzzWords.length;
    resultados.push(buzzWords[palabraIndex]);
  } else {
    resultados.push(i);
  }
}

console.log(resultados);
console.log(`Total: ${resultados.length}`);