# API RestFull - NodeJs

![Logo personagens clássicos](https://segredosdomundo.r7.com/wp-content/uploads/2020/03/desenhos-antigos-mais-de-100-desenhos-que-te-farao-voltar-a-infancia-11.jpg)


>API criada para estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo com personagens clássicos que tem mais de 50 anos.


Desenhos animados são atemporais, mesmo os mais antigos, mas ainda continuam sendo exibidos em algum canal. Eles nos trazem boas lembranças, de uma época com mais diversão e com menos preocupações e são uma espécie de calmante para o stress do dia a dia.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, utilize o arquivo .env.exemple para criar o seu. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/nome_do_database.

* Para executar o projeto com o nodemon, digite no terminal:
`npm run dev`

* Para executar o projeto com o node, digite no terminal:
`npm start`

## Testando a API

Você pode utilizar algumas ferramentas para teste, porém durante a construção desta API foi utilizado o Thunder Client, um plugin que você instala no vsCode.

Exemplos de URLs:
* Essa é a URL de teste padrão: http://localhost:3000/personagens
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens/ID
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/personagens/filter?velocidademax=875

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "nome": "Perna Longa",
    "primeira_aparicao": 1940,
    "bordao": "Eh… o que é que há, velhinho?",
    "criadores": "Ben Hardaway, Tex Avery, Chuck Jones, Robert McKimson, Bob Clampett, Bob Givens",
    "imagem": "https://i0.wp.com/arteref.com/wp-content/uploads/2019/04/Bugs-Bunny.jpg?w=700&ssl=1"
}
```