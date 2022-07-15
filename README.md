# Nest FilmesAPI

Sistema de registro de filmes seguindo o padrão de interface API Restful. 

<div>
<img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/>
<img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"/>
<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"/>
</div>

## 💻 Sobre

Esta foi minha primeira aplicação utilizando o framework NestJS e o sistema testes por meio do Jest. Mesmo tendo experiência com aplicações em Node e Typescript, foi um grande desafio implementar todas as funcionalidades da forma correta. Escolhi utilizar o SQLite como banco de dados devido a simplicidade do projeto. Foram implementados todos os métodos CRUD e diversos testes integrados para verificar o funcionamento completo da API.

O Projeto também conta com uma [documentação](https://filmes-apirest.herokuapp.com/api) com todas as rotas, modelos e exemplos das requisições. Para acessar, siga o passo a passo abaixo ou acesse a versão web por [aqui](https://filmes-apirest.herokuapp.com/movies)

## 📥 Instalação

1. Faça o download como ZIP clicando neste [link](https://github.com/C836/Nest-Filmes-API/archive/refs/heads/main.zip) e extraia a pasta no local de sua preferência ou siga o passo a passo para fazer a instalação através do terminal do [Git:](https://git-scm.com/)

```bash
# Navegue pelos arquivos com o comando "cd" e faça o download do projeto

# Via SSH
$ git clone https://github.com/C836/Nest-Filmes-API.git
# ou via HTTPS
$ git clone git@github.com:C836/Nest-Filmes-API.git

# Após o download, entre na pasta raiz da aplicação
$ cd Nest-Filmes-API
```

2. Instale as dependências necessárias e inicie a aplicação.

```bash
$ npm install

$ npm start
```

## 🤖 Testes

A aplicação conta com uma lista de testes unitários para verificar o funcionamento do projeto utilizando o framework [Jest](https://jestjs.io/pt-BR/).

Para iniciar os testes utilize o seguinte comando em um terminal de sua escolha:

```bash
$ npm run test
```

<details>
<summary>Specs</summary>
</p>
Testes de controle
</p>

- [x] Definição do módulo de controle e módulo de serviço
- [x] Resposta da rota GetAll
- [x] Resposta da rota Get
- [x] Resposta da rota Post
- [x] Resposta da rota Put
- [x] Resposta da rota Delete

Testes de serviço

- [x] Definição do módulo de serviço e módulo das funções
- [x] Resposta da função de pesquisa
- [x] Resposta da função de pesquisa unitária
- [x] Resposta da função de criação
- [x] Resposta da função de atualização
- [x] Resposta da função de salvamento
- [x] Resposta da função de remoção
</details>

## 📝 Licença

<b>Copyright (c) 2022 Gabriel Lopes</b>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/C836/Greatdex/blob/main/LICENSE) para mais detalhes.
