// Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento abaixo (não se importe com a ordem dos campos):

/*
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
*/

db.clientes.aggregate([
  { $group: {
    _id: { sexo: "$sexo", UF: "$endereco.uf" },
    total: { $sum: 1 }
  } },
  { $project: {
    _id: 0,
    sexo: "$_id.sexo",
    estado: "$_id.UF",
    total: 1
  } }
]);
