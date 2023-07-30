// Desenvolver um programa para calcular o fatorial de um número.
function fatorialRecursivo (num) {
  if(num === 1 || num === 0) {
    return 1
  } else {
    return num * fatorial(num-1)
  }
}

function fatorial (num) {
  const numConvertido = Number(num)
  if (numConvertido) {
    if (numConvertido >= 0) {
      return fatorialRecursivo(numConvertido)
    } else {
      console.log("O fatorial para números negativos é indefinido")
    }
  } else {
    console.log("Erro de tipo de dado")
  }
}

console.log(fatorial("-5a"))