// Desenvolver um programa para verificar se um número é par ou ímpar.
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite um número", (answer) => {
  const num = Number(answer)
  if(num) {
    num % 2 === 0 ? console.log("O número é par") : console.log("O número é impar")
  } else {
    console.log("Erro de tipo de input")
  }
  rl.close()
})

// Aproved