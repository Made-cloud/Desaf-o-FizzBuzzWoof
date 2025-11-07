// Refer to Task 6 in your Instructions to complete this task

let resultados = [];

const prompt = require("prompt-sync")();

const limite = parseInt(prompt("ingresa hasta que número deseas contar (1-105): "));
if (limite < 1 || limite > 105) {
  console.log("Error. Ingrese SOLO un número entre 1 y 105");
  return;
}

for (let i = 1; i <= limite; i++) {


  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    resultados.push("FizzBuzzWoof");

  } else if (i % 3 === 0 && i % 5 === 0) {
    resultados.push("FizzBuzz");

  } else if (i % 3 === 0 && i % 7 === 0) {
      resultados.push("FizzWoof");
    }

   else if (i % 3 === 0) {
    resultados.push("Fizz");

  } else if (i % 5 === 0) {
    resultados.push("Buzz");

  } else if (i % 7 === 0) {
    resultados.push("Woof");

  } else {
    resultados.push(i);
  }
}

console.log(resultados);
console.log(`Total de elementos: ${resultados.length}`);