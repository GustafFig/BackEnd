# Exercicos do dia 28/1 d Trybe
## MSC e conexao com MongoDB

### Exercício 1

  Exercício 1: Modifique sua aplicação, substituindo o MySQL pelo MongoDB, mantendo exatamente o mesmo comportamento. Concentre suas mudanças na camada de modelo e tente alterar o mínimo possível nas outras camadas.

### Exercício 2

  Remova a camada de view da aplicação, transformando-a em uma API que recebe e retorna JSON. Concentre as alterações na camada de controller. Idealmente, o modelo não deve ser alterado.

### Exercício 3

  Vamos incrementar a API cep-lookup com algumas estatísticas. Vamos armazenar informações sobre quantidade de consultas a CEPs, agrupando por estado e cidade. Por exemplo, se houve duas consultas a CEPs de Florianópolis e uma de Joinville, teremos nos banco estas informações:

```{
  "uf": "SC",
  "quantidade" 3
}
{
  "cidade": "Florianópolis",
  "quantidade" 2
}
{
  "uf": "Joinville",
  "quantidade" 1
}
```

Sempre que um CEP for consultado, os documentos relacionados a sua cidade e a seu estado devem ser autualizados, incrementando o contador.
Adicione à API um endpoint que permita consultar estatísticas por cidade ou estado. Armazene os documentos sobre estatísticas em apenas uma coleção no banco. Crie um modelo que forneça uma interface para ler e atualizar essas estatísticas.
Em uma requisição de consulta de CEP, será necessário ler ou salvar o CEP no banco e atualizar as estatísticas. Mantenha os modelos com responsabilidades separadas, ou seja, não coloque lógica de estatística no modelo de CEP ou vice-versa. Crie um serviço que acessará ambos os modelos para realizar as operações necessárias e chame esse serviço no controller.
