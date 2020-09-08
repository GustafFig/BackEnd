# Exercícios do dia 29.1 da Trybe

## JWT - Json Web Token

### Exercício 1

  Altere o tempo em que seu token vai expirar para 1 minuto. Faça uma primeira requisição na API com esse novo token. Deve funcionar, pois ainda está dentro do tempo de expiração. Espere o tempo passar e, após 1 minuto, tente fazer uma nova requisição e veja o que acontece.

### Exercício 2

  Escreva um endpoint novo para que seja possível criar novos posts para nosso blog. Porém, só quem poderá criar novos posts são pessoas admin.
  
  **Obs.: O cadastro de posts pode ser "falso". Porém, a autenticação deverá ser verdadeira. A ideia aqui é testar seu aprendizado de JWT e não de web APIs em Node.js.**

### Bônus

  Já reparou que as senhas são guardadas no banco como plaintext? Qualquer um que puder acessar o banco de dados pode vê-las. Para resolver esse problema, nós podemos usar a biblioteca bcrypt. Essa biblioteca permite armazenar senhas de forma segura. Altere nossa aplicação parar utilizá-la na hora de salvar as senhas no banco.

  **Para esse desafio, você pode usar o material extra para aprender mais sobre o bcrypt e implementá-lo na nossa API.**
