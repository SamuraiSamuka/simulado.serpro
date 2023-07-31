// Crie uma função que receba um array de números e retorne um novo array contendo apenas os números pares do array original.
const chalk = require("chalk")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function validaInput(input){
  const listaInput = input.split(',')
  const itensExcluídos = listaInput.filter(item => !Number(item))
  
  console.log("Você digitou: ", chalk.yellow(listaInput))
  console.log("Os itens", chalk.red(itensExcluídos), "foram excluídos pois violaram regras de validação de tipo de dados")
  
  const listaConversao = listaInput.map(item => Number(item)) // Converte as entradas em Number
  const listaLimpa = listaConversao.filter(item => item !== NaN) // filtra elementos não numéricos
  return listaLimpa
}

function selecionaNumerosPares(lista){
  const lista_numeros = validaInput(lista)
  const lista_pares = lista_numeros.filter(item => item % 2 === 0 && item !== 0)
  return lista_pares
}

rl.question("Digite uma lista de números separados por ',': ", (answer) => {
  
  const numeros_pares = selecionaNumerosPares(answer)

  console.log(chalk.bgGreen.bold("Os números pares da lista informada são:"), numeros_pares)

  rl.close()
})
