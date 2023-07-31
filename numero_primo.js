// Escreva uma função que receba um número inteiro positivo como entrada e retorne true se ele for um número primo ou false se não for. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
const chalk = require('chalk')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calculaAmostragem(num){
  const ordemGrandeza = Number(Number(num).toExponential().toString().split("e")[1]) // retorna a OG do numero
  const OGMinima = 6 // Utilizada para definir a partir de qual valor as mensagens de estimativas serão exibidas
  const divisor = ordemGrandeza > OGMinima ? Number(1 + "e" + (ordemGrandeza-OGMinima)) : 1 // Define um valor adequado para retornar uma estimativa ágil de acordo com a OG
  const amostra = Math.floor(num/divisor)
  const limite = num - amostra // zerá zero quando a OG do número for baixa
  return {divisor, amostra, limite}
}

function calculaPerfomance(inicio, fim, multiplicador = 1){
  return (fim - inicio) * multiplicador
}

function exibeEstimativa(inicio, momentoAtual, multiplicador) {
  const estimativa = calculaPerfomance(inicio, momentoAtual, multiplicador)
  console.log(chalk.yellow("Calculando..."),"Estimativa de ~", chalk.yellow((estimativa/1000).toFixed(2)), "segundos")
}

function ehNumeroPrimo(num){
  // cálculo de performance inicial
  const amostragem = calculaAmostragem(num)
  const inicio = performance.now()
  
  if(num === 1) {
    const fim = performance.now()
    return { primo:true, divisores: [], duracao: calculaPerfomance(inicio, fim) }
    
  } else {
    let primo = true
    let divisores = []
    for(let i = num - 1; i > 1 ; i--){
      if (num % i === 0) {
        primo = false
        divisores.push(i)
      }
      if (i === amostragem.limite) {
        // Estimativa de performance
        const agora = performance.now()
        exibeEstimativa(inicio, agora, amostragem.divisor)
      }
    }

    // Cálculo de performance final
    const fim = performance.now()
    const duracao = calculaPerfomance(inicio, fim)

    return {primo, divisores, duracao}
  }
}

function ehInteiroPositivo(input){
  const ehNumero = Number(input)
  if(ehNumero !== NaN){
    if(Number.isInteger(ehNumero)){
      if(ehNumero > 0){
        return true
      } else {
        throw new Error(chalk.red("Input inválido: Não é um inteiro positivo."))
      }
    } else {
      throw new Error(chalk.red("Input inválido: Não é um número inteiro."))
    }

  } else {
    throw new Error(chalk.red("Input inválido: Não é um número."))
  }
}

function verificaSePrimo(num) {
  ehInteiroPositivo(num)
  return ehNumeroPrimo(num)
}

rl.question(`Digite um ${chalk.bold.underline("número inteiro positivo")} qualquer para verificar se ele é primo ou não: `, (answer) => {
  console.log("Você digitou: ", chalk.yellow(answer))
  
  const resultado = verificaSePrimo(answer)
  
  resultado.primo ? 
    console.log(chalk.bgGreen.bold(`${answer} é primo`)) 
  : console.log(chalk.bgRed(chalk.bgRed.bold(`${answer} não é primo`), "e possui os seguintes divisores:"), resultado.divisores)
  
  console.log("Operação realizada em", chalk.yellow((resultado.duracao/1000).toFixed(4)), "segundos")
  rl.close()
})

// função 1 verificação se o input é adequado: um número inteiro positivo

// função 2 verifica se é um número primo
