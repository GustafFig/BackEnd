// Exercício 11: Calcule a diferença absoluta em dias entre a data da primeira entrega prevista e a última, considerando o pipeline do exercício 10.

const threeDays = 3 * 24 * 360000

db.vendas.aggregate([
  { $match: {
    dataVenda: { $gte: ISODate("2020-03-01"), $lt: ISODate("2020-04-01") },
    status: "EM SEPARACAO"
  } },
  { $addFields: {
    dataEntregaPrevista: { $add: ["$dataVenda", threeDays] }
  } },
  { $project: { _id: 0, clienteId: 1, dataVenda: 1, dataEntregaPrevista: 1 } },
  { $group: {
    _id: null,
    primeiraEntrega: { $min: "$dataEntregaPrevista" },
    ultimaEntrega: { $max: "$dataEntregaPrevista" }
  } },
  { $addFields: {
    tempoEntrgasMarco: {
      $floor: {
        $divide: [{
          $abs: { $subtract: ["$primeiraEntrega", "$ultimaEntrega"] }
        }, 24 * 3600000]
      }
    }
  } }
]);

