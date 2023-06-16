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

3. Para rodar o projeto é necessário executar o comando abaixo no diretório raiz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível

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


### :coin: Token
<details>
  <summary> Autenticação </summary>
  <br>

> :warning: &nbsp; _Após o login de uma pessoa usuária cadastrada, é gerado um <code>token</code> válido por 15 minutos, o qual será autenticado em todas as rotas a seguir, exceto na rota de cadastro de uma pessoa usuária_

<details>
  <summary> As requisições irão falhar nos seguintes casos: </summary>
  - É disparado o erro <code>401</code> <code>{ "message": "Token not found" }</code>, ao fazer uma operação sem um token; <br>
  - É disparado o erro <code>401</code> <code>{ "message": "Expired or invalid token" }</code>, ao fazer uma operação com um token expirado ou inválido; <br>
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
  <summary> Para o cadastro de uma pessoa usuária não é necessário estar autenticado no sistema. Após o cadastro, todas as outras requisições exigem um token de autenticação. A resposta da requisição é a seguinte com <code>status 201</code>: </summary>

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
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de pessoas usuárias | `http://localhost:3001/user`

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
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma pessoa usuária a partir do id | `http://localhost:3001/user/:id`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
  {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ message: "User does not exist" }</code>, caso a pessoa usuária não esteja cadastrada no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deleta uma pessoa usuária | `http://localhost:3001/user/me`

* A resposta da requisição é <code>204</code> e sem body em caso de sucesso

</details>


### :bookmark: Categories
<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de uma categoria | `http://localhost:3001/categories`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "name": "Typescript"
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 201</code>: </summary>

```
{
  "id": 3,
  "name": "Typescript"
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "\"name\" is required" }</code>, caso a requisição não receba o campo <code>name</code> devidamente preenchido; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de categorias | `http://localhost:3001/categories`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
      "id": 1,
      "name": "Inovação"
  },
  {
      "id": 2,
      "name": "Escola"
  },
  ...
]
```
</details>

</details>


### :newspaper: Post
<details>
  <summary> Rotas </summary>
  <br>

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Realiza o cadastro de um post | `http://localhost:3001/post`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 201</code>: </summary>
  
```
{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "updated": "2023-06-16T10:00:01.196Z",
  "published": "2023-06-16T10:00:01.196Z"
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>400</code> <code>{ "message": "Some required fields are missing" }</code>, caso todos os campos não estejam devidamente preenchidos; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "one or more \"categoryIds\" not found" }</code>, caso o campo <code>categoryIds</code> não esteja devidamente preenchido com um array contendo apenas categorias existentes no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de posts | `http://localhost:3001/post`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  },
  ...
]
```
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna um post a partir do id | `http://localhost:3001/post/:id`

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
      {
          "id": 1,
          "name": "Inovação"
      }
  ]
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - É disparado o erro <code>404</code> <code>{ message: "Post does not exist" }</code>, caso o post não esteja cadastrado no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `PUT` | Atualiza um post a partir do id | `http://localhost:3001/post/:id`

<details>
  <summary> A estrutura do body da requisição deverá seguir o padrão abaixo: </summary>

```
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
}
```
</details>

<details>
  <summary> A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
{{
  "id": 3,
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "userId": 1,
  "published": "2022-05-18T18:00:01.000Z",
  "updated": "2022-05-18T18:07:32.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    },
    {
      "id": 2,
      "name": "Escola"
    }
  ]
}
```
</details>

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
  - A rota retorna um erro <code>401</code> <code>{ "message": "Unauthorized user" }</code>, caso o post editado não tenho sido criado pela pessoa usuária autenticada; <br>
  - A rota retorna um erro <code>400</code> <code>{ "message": "Some required fields are missing" }</code>, caso todos os campos não estejam devidamente preenchidos; <br>
  - A rota retorna um erro <code>404</code> <code>{ message: "Post does not exist" }</code>, caso o post não esteja cadastrado no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `DELETE` | Deleta um post a partir do id | `http://localhost:3001/post/:id`

* A resposta da requisição é <code>204</code> e sem body em caso de sucesso

<details>
  <summary> A requisição irá falhar nos seguintes casos: </summary>
    - A rota retorna um erro <code>401</code> <code>{ "message": "Unauthorized user" }</code>, caso o post deletado não tenho sido criado pela pessoa usuária autenticada; <br>
  - É disparado o erro <code>404</code> <code>{ "message": "Post does not exist" }</code>, caso o post não esteja cadastrado no banco de dados; <br>
</details>
<br>

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna uma lista de posts de acordo com o termo de pesquisa | `http://localhost:3001/post/search?q=searchTerm`

<details>
  <summary> A estrutura da URL deverá seguir o padrão abaixo: </summary>

```
/talker/search?q=vamos
```
</details>

<details>
  <summary> O termo de pesquisa pode ser referente ao <code>title</code> ou <code>content</code> do post. A resposta da requisição é a seguinte com <code>status 200</code>: </summary>
  
```
[
  {
    "id": 2,
    "title": "Vamos que vamos",
    "content": "Foguete não tem ré",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
    },
    "categories": [
      {
        "id": 2,
        "name": "Escola"
      }
    ]
  }
]
```
</details>

<details>
  <summary> Caso o termo de pesquisa não seja informado ou esteja vazio, o endpoint deverá retornar o <code>status 200</code> e um array com todos os posts cadastrados: </summary>

  ```
  [
    {
      "id": 1,
      "title": "Post do Ano",
      "content": "Melhor post do ano",
      "userId": 1,
      "published": "2011-08-01T19:58:00.000Z",
      "updated": "2011-08-01T19:58:51.000Z",
      "user": {
        "id": 1,
        "displayName": "Lewis Hamilton",
        "email": "lewishamilton@gmail.com",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
      },
      "categories": [
        {
          "id": 1,
          "name": "Inovação"
        }
      ]
    },
    ...
  ]
```
</details>

<details>
<summary> Caso nenhum post satisfaça a busca, o endpoint deve retornar o <code>status 200</code> e um array vazio. Exemplo: </summary>
<code>[]</code>
</details>

</details>
<br>

###### _README inspired by [Italo Amaral](https://www.linkedin.com/in/italo-rockenbach-594082132/)_