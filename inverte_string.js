// Desenvolver uma função que receba uma string como entrada e retorne outra string invertida. Por exemplo, se a entrada for "hello", a saída deve ser "olleh". 
const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function inverterTexto(texto) {
  const listaLetras = texto.split('') // transforma uma string em um array
  const textoInvertido = [] // vai armazenar o texto invertido na forma de um array
  listaLetras.forEach(letra => textoInvertido.unshift(letra)) // inverte de fato a string em um array
  return textoInvertido.join('') // junta os itens do array em uma única string e a retorna
}

rl.question("Digite um texto para que seja invertido: ", (answer) => {
  const textoInvertido = inverterTexto(answer)

  console.log("Você digitou:", chalk.yellow(answer))
  console.log(chalk.bgGreen.bold("Texto invertido: "), chalk.yellow(textoInvertido))

  rl.close()
})