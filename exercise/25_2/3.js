// Exercício 3: Remova o estágio $count do exercício anterior e adicione um estágio no pipeline que coloque as compras do cliente no campo compras.

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
  } },
  { $lookup: {
    from: "vendas",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } }
]);
