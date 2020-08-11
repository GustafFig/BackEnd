// Exercício 1: Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes. Algumas dicas:

// arredonde para baixo o valor da idade;
// calcule a idade usando a diferença entre a data corrente e a data de nascimento;
// 1 dia é igual a 86400000 milissegundos.

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
]);
