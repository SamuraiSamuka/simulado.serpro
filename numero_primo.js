// Escreva uma função que receba um número inteiro positivo como entrada e retorne true se ele for um número primo ou false se não for. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
// Solução -> Algoritmo de força bruta que divide um número por todos os seu antecessores para buscar encontrar divisores diferentes de 1 e do próprio número, descaracterizando ou caracterizando como um número primo.
const chalk = require('chalk')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function calculaAmostragem(num){
  const ordemGrandeza = Number(Number(num).toExponential().toString().split("e")[1]) // retorna a OG do numero
  const OGMinima = 6 // Utilizada para definir a partir de qual OG as mensagens de estimativas serão exibidas
  const divisor = ordemGrandeza > OGMinima ? Number(1 + "e" + (ordemGrandeza-OGMinima)) : 1 // Define uma amostragem adequada para retornar uma estimativa ágil de acordo com a OG
  const amostra = Math.floor(num/divisor)
  const limite = num - amostra // zerá zero quando a OG do número for baixa. Usada para exibir a mensagem na hora adequada.
  return {divisor, amostra, limite}
}

function calculaPerfomance(inicio, fim, multiplicador = 1){
  return (fim - inicio) * multiplicador
}

function exibeEstimativa(inicio, momentoAtual, multiplicador) {
  const estimativa = calculaPerfomance(inicio, momentoAtual, multiplicador)
  console.log(
      chalk.yellow("Calculando..."),
      "Estimativa de ~", 
      chalk.yellow(convertemMilissegundos(estimativa)))
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

function ehNumeroInteiroPositivo(input){
  const ehNumero = Number(input)
  if(ehNumero){
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
  return ehNumeroInteiroPositivo(num) ? ehNumeroPrimo(num) : ""
}

function convertemMilissegundos(milissegundos) {
  const horas_ref = 3600000
  const minutos_ref = 60000
  const segundos_ref = 1000

  const horas = Math.floor(milissegundos / horas_ref)
  const horas_resto = milissegundos % horas_ref
  const minutos = Math.floor(horas_resto/ minutos_ref)
  const minutos_resto = horas_resto % minutos_ref
  const segundos = Math.floor(minutos_resto / segundos_ref)
  const segundos_resto = minutos_resto % segundos_ref

  let tempo = ""
  tempo += `${segundos_resto.toFixed(2)}ms`
  segundos ? tempo =`${segundos}s:` + tempo : ""
  minutos ? tempo = `${minutos}m:` + tempo : ""
  horas ? tempo = `${horas}H:` + tempo : ""
  // `${horas}H:${minutos}m:${segundos}s:${segundos_resto.toFixed(4)}ms`
  return tempo
}

rl.question(`Digite um ${chalk.bold.underline("número inteiro positivo")} qualquer para verificar se ele é primo ou não: `, (answer) => {
  console.log("Você digitou: ", chalk.yellow(answer))
  
  try {
    const resultado = verificaSePrimo(answer)
    resultado.primo ? 
      console.log(chalk.bgGreen.bold(`${answer} é primo`)) 
    : console.log(chalk.bgRed(chalk.bgRed.bold(`${answer} não é primo`), "e possui os seguintes divisores (além de 1 e ele mesmo):"), resultado.divisores) // caso não seja primo retorna os divisores do números, além de 1 e ele mesmo
    
    console.log("Operação realizada em", chalk.yellow(convertemMilissegundos(resultado.duracao)))
  } catch (error) {
    console.error(error.message)
  }
  
  rl.close()
})

// função 1 verificação se o input é adequado: um número inteiro positivo

// função 2 verifica se é um número primo
