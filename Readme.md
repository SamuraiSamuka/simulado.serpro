Respostas de simulado de prova prática do concurso do serpro 2023

----------------------------------------------------------------------
Simulado de Prova Prática do Serpro - JavaScript (Nível básico):
----------------------------------------------------------------------

Desenvolver um programa para verificar se um número é par ou ímpar.
Especificações:

1 - Escreva um programa que receba um número como entrada e verifique se ele é par ou ímpar. O programa deve exibir uma mensagem indicando se o número é par ou ímpar. [resolvido]

2 - Desenvolver um programa para calcular o fatorial de um número. [resolvido]
    Especificações:
    Crie um programa que receba um número inteiro como entrada e calcule o fatorial desse número. O programa deve exibir o resultado do fatorial.

3 - Encontrar e corrigir os erros no código abaixo: [resolvido]

    function reverseString(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i++) {
            reversedStr += str[i];
        }
        return reversedStr;
    }

    let originalString = 'hello';
    let result = reverseString(originalString);
    console.log(result);

4 - Refatorar o código abaixo para utilizar funções de array (map, filter, reduce) e arrow functions: [resolvido]

    let numbers = [1, 2, 3, 4, 5];

    let squaredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i]);
    }

    console.log(squaredNumbers);

5 - Elaborar testes unitários.
    Especificações:
    Elabore testes unitários para a função a seguir, que recebe um array de números e retorna a soma de todos eles:

    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

-----------------------
Observações importantes:

Ao finalizar o simulado, encaminhe os códigos-fonte e os testes unitários (caso tenha realizado a tarefa 5) para avaliação.
Será considerada a correção dos resultados, a eficiência e a clareza dos códigos, bem como o atendimento aos requisitos estabelecidos.
Boa prova!


----------------------------------------------------------------------
Simulado de Prova Prática do Serpro - JavaScript (Nível Intermediário):
----------------------------------------------------------------------

1 - Desenvolver uma função que receba uma string como entrada e retorne outra string invertida. Por exemplo, se a entrada for "hello", a saída deve ser "olleh". [resolvido]

2 - Crie uma função que receba um array de números e retorne um novo array contendo apenas os números pares do array original. [resolvido]

3 - Escreva uma função que receba um número inteiro positivo como entrada e retorne true se ele for um número primo ou false se não for. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. [resolvido]

4 - Desenvolva uma função que receba um array de objetos representando produtos, onde cada objeto possui um nome e um preço. A função deve calcular e retornar o preço total de todos os produtos no array. [resolvido]

    Exemplo de entrada:

    const produtos = [
      { nome: "Camiseta", preco: 25.00 },
      { nome: "Calça", preco: 50.00 },
      { nome: "Tênis", preco: 100.00 }
    ];
    Exemplo de saída: 175.00

5 - Escreva uma função que receba uma string como entrada e retorne um objeto contendo a contagem de cada caractere (não contabilizando espaços em branco). O objeto resultante deve ter a contagem de cada caractere como valor e o caractere como chave.
Exemplo de entrada: "abracadabra"

    Exemplo de saída:

    {
      a: 5,
      b: 2,
      r: 2,
      c: 1,
      d: 1
    }

-------------------
Observações importantes:

Ao finalizar o simulado, encaminhe os códigos-fonte para avaliação.
Lembre-se de testar suas funções com diferentes casos de entrada para garantir que elas funcionem corretamente em diversas situações.
Boa prova! Se tiver alguma dúvida, não hesite em perguntar. Estou aqui para ajudar!