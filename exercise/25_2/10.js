// Exercício 10: Selecione todas as vendas do mês de Março de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.

const threeDays = 3 * 24 * 360000

db.vendas.aggregate([
  { $match: {
    dataVenda: { $gte: ISODate("2020-03-01"), $lt: ISODate("2020-04-01") },
    status: "EM SEPARACAO"
  } },
  { $addFields: {
    dataEntregaPrevista: { $add: ["$dataVenda", threeDays] }
  } },
  { $project: { _id: 0, clienteId: 1, dataVenda: 1, dataEntregaPrevista: 1 } }
]);
