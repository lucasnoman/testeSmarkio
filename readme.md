# Teste para processo seletivo da Smarkio

### Banco de dados:

Usei o `mysql2`, com o querybuilder `knex`, então para fazer a conexão com o banco de dados, deve-se alterar os dados:
`database`, `user` e `password` no arquivo **`knexfile`** na pasta `Back-end`.

---

### Para execução do código:
Dentro da pasta **`Back-end`** e **`Front-end`** separadamente, use os comandos:

Para instalar as dependências: `yarn install`

Para executar: `yarn start`

Apenas dentro da pasta `Back-end`, execute o comando `yarn knex migrate:latest`, para que a tabela seja criada.

Os requests http estão no formato .paw, mas exportei um arquivo .txt.