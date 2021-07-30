<br />
<p align="center">
    <img src="https://i.imgur.com/oVZ0sZ4.gif" alt="desktop-version" width="1000">

  <h3 align="center">TodoList by <a href="https://www.linkedin.com/in/lucasmpa/">Lucas Matheus</a></h3>
 <br />
  <p align="center">
     Página de lista de tarefas 
       <br/>
    <br/>
     <img src="https://i.imgur.com/AYMNFfJ.gif" alt="mobile-version" width="350">
  </p>
</p>

## Índice

* [Sobre](#sobre) 
* [Como Iniciar Na Sua Máquina](#como-iniciar-na-sua-máquina) 


# Sobre
<p align="justify">
    Em busca de aprimorar meus conhecimentos em NodeJS e Back-end, me adentrei em um curso da Udemy sobre GraphQL e com intuito de colocar em prática meus conhecimentos aquiridos, decidi por fazer este projeto, sendo assim, minha primeira aplicação em que construo do início ao fim, utilizando NodeJS e GraphQL no back-end e ReactJs no front.
</p>

## Como Iniciar Na Sua Máquina

Antes de tudo, você precisa instalar o MySQL em sua máquina, leia a documentação para saber como prosseguir.

<a href="https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt">Ubuntu</a> - 
<a href="https://www.alura.com.br/artigos/mysql-do-download-e-instalacao-ate-sua-primeira-tabela?gclid=CjwKCAjwxo6IBhBKEiwAXSYBs38dOMMIW8u_A1iOAFfi3AclsQcKBR-ZYEQYRRn_7mOjLdZ2S1QMAhoCb9oQAvD_BwE">Windows</a>


### Para configurar a conexão com o banco:

Após instalar e configurar seu usuário MySQL crie um banco com um nome que deseje. Faça uma cópia do arquivo `.env.example` e renomeie para `.env`. Neste arquivo você precisará configurar o Knex para que consiga acessar o banco. Então, substitua as informações já escritas pelas informações de sua máquina.

<br />
<br />

Obs: A variável de ambiente `APP_AUTH_SECRET` ainda não foi implementada no sistema.
    


### Para instalar as dependências:

```
 $ npm i
 
 ou
 
 $ yarn
```

### Para rodar as migrations:

```
 $ npx knex migrate:latest
 
 ou
 
 $ yarn knex migrate:latest
```

### Para iniciar o projeto:

```
 $ npm start
 
 ou
 
 $ yarn start
```
Obs: Por padrão, este projeto inicia na porta 4000, fique atento caso tenha algum serviço sendo usado nessa porta. Caso deseje alterar a porta, 
lembre-se de alterar também o arquivo `client-graphql.js` no projeto do front-end da aplicação.


Desenvolvido por  <a href="https://www.linkedin.com/in/lucasmpa/">Lucas Matheus</a> :)
