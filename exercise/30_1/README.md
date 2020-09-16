# Exercicios de HEROKU

## Exercicios do dia 30_1 da Trybe

### Exercicio 1

Crie uma API simples que responda com "Está vivo!!!" utilizando express e faça o deploy no Heroku utilizando o CLI.

### Exercicio 2

Agora, modifique a API para responder uma nova mensagem

* Crie uma nova variável de ambiente com um texto qualquer
* Modifique o código da sua API para que ela responda com o texto contido na variável criada no passo anterior

### Exercicio 3

Agora vamos criar um Procfile

* Crie uma cópia do arquivo index.js com o nome indexProcfile.js
* No novo arquivo, altere a mensagem de resposta da API para "Procfile funciona mesmo!"
* Crie um Procfile para startar sua aplicação a partir do novo arquivo de indexProcfile.js.

### Exercicio 4

Simule o deploy em multi ambientes (produção e homolação). Para isso

* Renomeie o remote do deploy dos exercícios anteriores para homolog
* Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod
* Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente

### Exercicio 5

Faça deploy de uma aplicação React

* Crie uma aplicação React utilizando create-react-app
* Crie um novo app utilizando o buildpack mars/create-react-app
* Então, faça o deploy do app no Heroku

## Bonus

### Exercicio 6

Agora que você chegou até aqui, pegue os projetos que você criou anteriormente e faça deploy deles no Heroku! Compartilhe suas URLs com a turma para que as pessoas possam acessá-los de outros lugares

### Exercicio 7

Simule a estratégia de se ter multi-ambientes utilizando variáveis de ambiente específicas. Para isso

* Crie outros ambientes a partir dos códigos do exercícios anteriores
* Faça alterações para que os projetos se comportem de maneiras diferentes em ambientes diferentes de acordo com uma variável de ambiente. Pode ser uma mensagem diferente, ou um comportamento alterado, por exemplo
* Teste seus apps acessando cada um dos ambientes
