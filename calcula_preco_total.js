// Desenvolva uma função que receba um array de objetos representando produtos, onde cada objeto possui um nome e um preço. A função deve calcular e retornar o preço total de todos os produtos no array

function calculaPrecoTotal(produtos){
  const valorTotal = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0)
  console.log(valorTotal)
}

const produtos = [
  {
    nome: "detergente",
    preco: 2.5
  },
  {
    nome: "sabão em po",
    preco: 5.45
  }
]

calculaPrecoTotal(produtos)