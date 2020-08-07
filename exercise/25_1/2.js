// Utilizando o estágio $match, escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.

db.clientes.aggregate([{
  $match: {
    sexo: "FEMININO",
    dataNascimento: { }
  }
}])
