// As informações acima são sobre a Escola Jean Grey de Ensino Superior. Para todas as alterações realizadas você deve sempre atualizar ou adicionar o campo lastUpdate, esse campo armazena a data da última alteração com o tipo timestamp. Os exercícios devem ser realizados na ordem.

// Exercício 14: Remova o campo class dos documentos que possuem esse campo com o valor unknown.

db.xmen.updateMany(
  { "class": "unknown" },
  {
    $unset: { "class": "" },
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
  },
);
