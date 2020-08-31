# Exercicos do dia 27/2 d Trybe

## MVC e conexão com o MySQL

### Exercício 1

  Nesse exercício, você vai desenvolver uma aplicação MVC para consulta de CEPs, chamada cep-lookup. Você utilizará uma API para buscar os dados relacionados a um CEP e salvará esses dados no MySQL.

  Um CEP válido é composto por 8 dígitos, com um hífen opcional separando os três últimos dígitos. Por exemplo, 30310-030 e 30310030 são CEPs válidos. 303100308 e AB897453 não são.
  Para consultar um CEP, você deve utilizar a API CEP lá. A página contém instruções sobre como utilizar a API.
  O modelo deve fornecer uma interface para consultar CEPs. Primeiramente, o modelo deve consultar o banco de dados pelo CEP procurado. Se o CEP for encontrado, seus dados são retornados sem consultar a API. Caso contrário, o modelo deve fazer uma requisição a API. O modelo então deverá salvar no MySQL os dados da primeira API que responder com sucesso. Em outras palavras, o banco de dados funcionará como um cache de CEPs, enquanto a API só será consultada se um CEP não for encontrado localmente. Inicialmente, o banco deve estar vazio.
  O banco de dados só precisa armazenar as seguintes informações: CEP, UF, cidade, bairro e logradouro. Um CEP salvo no banco deve conter somente números, sem hífens, e essa coluna deve ter um índice único para evitar que o mesmo CEP seja cadastrado duas vezes e otimizar a busca.
  A página inicial da sua aplicação deve ter um input, onde a pessoa poderá digitar um CEP, e um botão, que realizará a busca. Se o CEP for válido, seus dados devem ser exibidos abaixo do input. Se o CEP não for encontrado, deve ser exibido o texto CEP não encontrado. Se for digitado um CEP com formato inválido, deve ser exibida a mensagem CEP inválido.
  Note que o CEP pode ser digitado no input com ou sem hífen, mas deve ser salvo no banco sem hífens.
  Lembre-se de organizar sua aplicação seguindo a arquitetura MVC, separando as responsabilidades em camadas.
