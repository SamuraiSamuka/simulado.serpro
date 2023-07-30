// Elabore testes unitários para a função a seguir, que recebe um array de números e retorna a soma de todos eles:
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
  }
  return sum;
}
