// Exercício 5: Confira o número de documentos retornados pelo pipeline e sem o filtro de idade com o método itcount(). Até aqui você deve ter 486 documentos sendo retornados.

db.clientes.aggregate([
  { $addFields: {
    idade: { $floor: { 
      $divide: [
        { $subtract: ["$$NOW", "$dataNascimento"] },
        milissegundos
      ]
    } }
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
]).itcount();
