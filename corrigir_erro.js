//Encontrar e corrigir os erros no código abaixo: 
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}

let originalString = 'hello';
let result = reverseString(originalString);
console.log(result);
