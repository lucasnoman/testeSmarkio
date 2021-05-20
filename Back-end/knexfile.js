// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      database: 'smarkioTest',
      user: 'root',
      password: 'root',
    },
    migrations: {
      tableName: 'knex_migrations', // não é obrigatório
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
