// Refatorar o código abaixo para utilizar funções de array (map, filter, reduce) e arrow functions
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     squaredNumbers.push(numbers[i] * numbers[i]);
// }
squaredNumbers = numbers.map(num => num * num)

console.log(squaredNumbers);
