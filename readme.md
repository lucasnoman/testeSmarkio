# Teste para processo seletivo da Smarkio

&nbsp;

## Banco de dados:

Usei o `mysql2`, com o "_querybuilder_" `knex`, então para fazer a conexão com o banco de dados, deve-se alterar os dados:
`database`, `user` e `password` no arquivo **`.env.example`** (além de remover o ".example" do nome) na pasta `Back-end`.

&nbsp;

## Para execução do código:

No seu terminal dentro das pastas **`Back-end`** e **`Front-end`**, use:

`yarn install` => Para instalar as dependências.

`yarn start` => Para executar o servidor e página.

Dentro de `Back-end`: `yarn knex migrate:latest` => para criar a tabela.

&nbsp;

**Obs:** Os requests http estão no formato .paw, mas exportei um arquivo .json para **Postman**.




- Removido styled-components para reduzir burocracia desnecessária