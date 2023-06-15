# Store Manager
#### _by [Allyson Belli Bogo](https://www.linkedin.com/in/allysonbogo/)_

## :page_with_curl: Sobre

O projeto consolida a utilização das ferramentas Node.js, Sequelize e JWT (JSON Web Token) para a criação de uma API RESTful com CRUD completo e banco de dados, focada na produção de conteúdo para um blog.

Este projeto integra um sistema de autenticação de pessoas usuárias utilizando JWT (JSON Web Token), permitindo que apenas pessoas usuárias autenticadas possam criar, editar e pesquisar posts no blog.


## :man_technologist: Habilidades desenvolvidas

* Node.js
* Sequelize
* Construção de uma API CRUD e banco de dados
* Sistema de autenticação utilizando JWT (JSON Web Token)


## 🛠️ Ferramentas Utilizadas

* Node.js
* Sequelize
* JWT (JSON Web Token)


## ⚙️ Como Executar

> :warning: &nbsp; _É necessário ter o Docker instalado para executar este projeto_

<details>
  <summary> Passo a passo </summary>
  <br>

1. Clone o repositório em uma pasta de preferência

```
git clone git@github.com:allysonbogo/project-blogs-api.git
```

2. Entre na pasta raíz do projeto e instale todas as dependências

```
npm install
```

3. Para rodar o projeto é necessario executar o comando abaixo no diretório raiz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível

```
docker-compose up -d
```

4. O comando abaixo irá criar o bando de dados, versionar o schema do banco utilizando as <code>migrations</code> e popular o banco com uso dos <code>seeders</code>

```
npm run populate
```
5. Para iniciar o servidor com live-reload, digite o comando abaixo

```
npm run dev
```
6. Para visualização da interface da API podem ser utilizados o Thunder Client, Postman, Insomnia ou alguma outra ferramenta de sua preferência
</details>


## 📚 Documentação (endpoints)


### :bust_in_silhouette: Login
<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o login de uma pessoa usuária cadastrada | `http://localhost:3001/login`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "email": "lewishamilton@gmail.com",
  "password": "123456"
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```
> :warning: &nbsp; _O token acima é fictício, o token verdadeiro é gerado a partir da ferramenta JWT (JSON Web Token), utilizando uma palavra-passe e um payload secretos_
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "Some required fields are missing" }</code>, caso a requisição não tenha todos os campos devidamente preenchidos; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "Invalid fields" }</code>, caso a requisição receba um par de <code>email</code> e <code>password</code> errados ou inexistentes; <br>
</details>
</details>


### :desktop_computer: User
<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma pessoa usuária | `http://localhost:3001/user`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem não é obrigatória
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 201</code>: </summary>
  
```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8"
}
```
> :warning: &nbsp; _O token acima é fictício, o token verdadeiro é gerado a partir da ferramenta JWT (JSON Web Token), utilizando uma palavra-passe e um payload secretos_
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"displayName\" length must be at least 8 characters long" }</code>, caso a requisição não receba o campo <code>displayName</code> devidamente preenchido com pelo menos 8 caracteres; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"email\" must be a valid email" }</code>, caso a requisição não receba o campo <code>email</code> com formato válido; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"password\" length must be at least 6 characters long" }</code>, caso a requisição não receba o campo <code>password</code> devidamente preenchido com pelo menos 6 caracteres; <br>
  - A rota retorna um erro <code>409</code> <code>{ "message": "User already registered" }</code>, caso o campo <code>email</code> já esteja cadastrado no banco de dados; <br>
</details>


| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de pessoas usuárias cadastradas | `http://localhost:3001/user`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  ...
]
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"displayName\" length must be at least 8 characters long" }</code>, caso a requisição não receba o campo <code>displayName</code> devidamente preenchido com pelo menos 8 caracteres; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"email\" must be a valid email" }</code>, caso a requisição não receba o campo <code>email</code> com formato válido; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"password\" length must be at least 6 characters long" }</code>, caso a requisição não receba o campo <code>password</code> devidamente preenchido com pelo menos 6 caracteres; <br>
  - A rota retorna um erro <code>409</code> <code>{ "message": "User already registered" }</code>, caso o campo <code>email</code> já esteja cadastrado no banco de dados; <br>
</details>

</details>


### :bookmark: Categories

### :newspaper: Post
<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de produtos cadastrados | `http://localhost:3001/products`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  ...
]
```
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna um produto a partir do id | `http://localhost:3001/products/:id`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{
  "id": 1,
  "name": "Martelo de Thor"
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ message: "Product not found" }</code>, caso o produto não esteja cadastrado no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de um produto | `http://localhost:3001/products`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "name": "Elemento X"
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 201</code>: </summary>
  
```
{
  "id": 24,
  "name": "Elemento X"
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"name\" is required" }</code> ao tentar cadastrar um produto sem o campo nome; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"name\" length must be at least 5 characters long" }</code> ao tentar cadastrar um produto com o campo nome com quantidade de caracteres inferior a 5; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"name\" must be a string" }</code> ao tentar cadastrar um produto com o campo nome não sendo uma string; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualiza um produto a partir do id | `http://localhost:3001/products/:id`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "name": "Novo nome"
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{
  "id": 1,
  "name": "Novo nome"
}
```
</details>

<details></code>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>404</code> <code>{ "message": Product not found" }</code> ao tentar atualizar um produto não cadastrado no banco de dados; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"name\" is required" }</code> ao tentar atualizar um produto sem o campo nome; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"name\" length must be at least 5 characters long" }</code> ao tentar atualizar um produto com o campo nome com quantidade de caracteres inferior a 5; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"name\" must be a string" }</code> ao tentar atualizar um produto com o campo nome não sendo uma string; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deleta um produto a partir do id | `http://localhost:3001/products/:id`

* A resposta da requisição é <code>204</code> e sem body em caso de sucesso

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ "message": "Product not found" }</code>, caso o produto não esteja cadastrado no banco de dados; <br>
</details>
</details>


### :moneybag: Sales

<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de vendas cadastradas | `http://localhost:3001/sales`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
    "saleId": 1,
    "date": "2023-05-30T21:21:46.000Z",
    "productId": 1,
    "quantity": 5
  },
  ...
]

```
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma venda a partir do id | `http://localhost:3001/sales/:id`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
    "date": "2023-05-30T21:21:46.000Z",
    "productId": 1,
    "quantity": 5
  },
  ...
]
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ "message": "Sale not found" }</code>, caso a venda não esteja cadastrada no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma venda | `http://localhost:3001/sales`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo:  </summary>
  
```
[
  {
    "productId": 1,
    "quantity": 5
  },
  ...
]
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 201</code>: </summary>
  
```
{
  "id": 3,
  "itemsSold": [
    {
      "productId": 1,
      "quantity": 5
    },
    ...
  ]
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>404</code> <code>{ "message": Product not found" }</code> ao tentar cadastrar uma venda com um produto não cadastrado no banco de dados; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"productId\" is required" }</code> ao tentar cadastrar uma venda sem o campo productId; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"productId\" must be greater than or equal to 1" }</code> ao tentar cadastrar uma venda com o campo productId inferior a 1; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"quantity\" is required" }</code> ao tentar cadastrar uma venda sem o campo quantity; <br>
  - A rota retorna um erro <code>422</code> <code>{ "message": "\"quantity\" must be greater than or equal to 1" }</code> ao tentar cadastrar uma venda com o campo quantity inferior a 1; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualiza a quantidade de um produto de uma venda | `http://localhost:3001/sales/:saleId/  products/:productId/quantity`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>
  
```
{
  "quantity": 5
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{
  "date": "2023-05-31T00:21:46.000Z",
  "productId": 1,
  "quantity": 1,
  "saleId": 1
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ "message": Sale not found" }</code> ao tentar atualizar uma venda não cadastrada no banco de dados; <br>
  - É disparado o erro <code>404</code> <code>{ "message": Product not found in sale" }</code> ao tentar atualizar um produto não cadastrado na venda; <br>
  - É disparado o erro <code>400</code> <code>{ "message": "\"quantity\" is required" }</code> ao tentar atualizar uma venda sem o campo quantity; <br>
  - É disparado o erro <code>422</code> <code>{ "message": "\"quantity\" must be greater than or equal to 1" }</code> ao tentar atualizar uma venda com o campo quantity inferior a 1; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deleta uma venda a partir do id | `http://localhost:3001/sales/:id`

* A resposta da requisição é <code>204</code> e sem body em caso de sucesso

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>404</code> <code>{ "message": "Sale not found" }</code>, caso a venda não esteja cadastrada no banco de dados; <br>
</details>
</details>
<br>

###### _README inspired by [Italo Amaral](https://www.linkedin.com/in/italo-rockenbach-594082132/)_