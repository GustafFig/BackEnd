// Exercício 2: Utilizando o novo campo idade, conte quantos clientes têm entre 18 e 25 anos.

const milissegundos = 365 * 86400000

db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { 
      $divide: [
        { $subtract: ["$$NOW", "$dataNascimento"] }
        , milissegundos
      ]
    } }
  } },
  { $match: {
    idade: { $gte: 18, $lt: 25 }
  } }
]);
