// Escreva uma função que receba um número inteiro positivo como entrada e retorne true se ele for um número primo ou false se não for. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
const chalk = require('chalk')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ehNumeroPrimo(num){
  // cálculo de performance inicial
  const inicio = performance.now()
  const ninetyFivePerCent = num - Math.ceil(num/20)

  if(num === 1) {
    // cálculo de performance final
    const fim = performance.now()
    const duracao = fim - inicio

    return {primo:true, divisores: [], duracao}
  } else {
    let primo = true
    let divisores = []
    console.log(chalk.yellow("Calculando..."))
    for(let i = num - 1; i > 1 ; i--){
      if (num % i === 0) {
        primo = false
        divisores.push(i)
      }
      if (i === ninetyFivePerCent) {
        // Estimativa de performance
        const now = performance.now()
        const estimativa = (now - inicio) * 20
        console.log("Estimativa de execução de", estimativa, "milissegundos")
      }
    }
    // cálculo de performance final
    const fim = performance.now()
    const duracao = fim - inicio

    return {primo, divisores, duracao}
  }
}

function verificaSePrimo(num) {
  const numConvertido = Number(num)
  if (numConvertido) {
    if (numConvertido > 0) {
      return ehNumeroPrimo(numConvertido)
    } else {
      console.log("O número tem que ser um inteiro positivo")
    }
  } else {
    console.log("Erro de tipo de dado")
  }
}

rl.question("Digite um número inteiro positivo qualquer para verificar se ele é primo ou não: ", (answer) => {
  console.log("Você digitou: ", chalk.yellow(answer))
  const resultado = verificaSePrimo(answer)
  resultado.primo ? console.log(chalk.bgGreen.bold(`${answer} é primo`)) : console.log(chalk.bgRed(chalk.bgRed.bold(`${answer} não é primo`), "e possui os seguintes divisores:"), resultado.divisores)
  console.log("Operação realizada em", chalk.yellow(resultado.duracao.toFixed(4)), "milissegundos")
  rl.close()
})
