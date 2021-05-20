## knexfile

Tem os dados do BD para fazer o login

## database/index.js

Recebe a dependencia **knex** e usa o **knexfile** como parâmetro para configurar

## Migration & Seeds

### Um diretório é criado para cada um dos dois dentro do `knexfile.js`

Cria um histórico do banco de dados e serve para criar tabelas, adicionar/remover campos.

```console
-> yarn knex migrate:make create_table_name

-> yarn knex migrate:latest

-> yarn knex migrate:rollback

-> yarn knex seed:make seed_name
-> yarn knex seed:run
-> yarn knex seed:run --specific nome_da_seed.js
```

O comando **`make`** acima, cria o arquivo 'migration' para criarmos a tabela.

Dentro do arquivo da migration, `exports.up` faz a execução da query e `exports.down` faz o rollback. Neste caso, o `down` deve ser exatamente o contrário do que fará o `up`.

O comando **`latest`** executa todas as migrações que não foram executadas ainda.

O comando **`rollback`** reverte o último comando e **`rollback --all`** reverte todas as _migrations_ completas.

**`seed`** vai popular a tabela. Ao rodar esse `seed` pela segunda ou mais vezes, ele vai usar o comando `.del()` para deletar o conteúdo anterior e adicionar novos, com novos id's, o que poderá atrapalhar caso haja uma foreign key.

---

Fiz uma paginação no `controller` dos projetos. Com a função `limit`, defino quantos registros aparecem e com `offset` defino o deslocamento de registros (na página 1 trás do 1 ao 5, na página 2 trás do 6 ao 10 e etc).
Com a função `count()` do **knex** conto a quantidade de projetos totais ou por usuário.
