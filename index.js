const chalk = require('chalk')

function ehInteiroPositivo(input){
  const ehNumero = Number(input)
  if(ehNumero){
    if(Number.isInteger(ehNumero)){
      if(ehNumero > 0){
        console.log(ehNumero)
      } else {
        return new Error(chalk.red("Input inválido: Não é um inteiro positivo."))
      }
    } else {
      return new Error(chalk.red("Input inválido: Não é um número inteiro."))
    }

  } else {
    return new Error(chalk.red("Input inválido: Não é um número."))
  }
}

// console.log(ehInteiroPositivo("-2"))
console.log((10).length)