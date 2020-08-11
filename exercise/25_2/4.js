// Exercício 4: Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020.

db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { 
      $divide: [
        { $subtract: ["$$NOW", "$dataNascimento"] },
        milissegundos
      ]
    } }
  } },
  { $match: {
    idade: { $gte: 18, $lt: 25 }
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } },
  { $match: {
    "compras.dataVenda": { $gte: ISODate("2019-06-01"), $lte: ISODate("2019-03-31") }
  } },
]);
