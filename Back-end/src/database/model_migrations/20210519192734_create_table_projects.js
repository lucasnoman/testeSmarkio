exports.up = knex =>
  knex.schema.createTable('projects', table => {
    table.uuid('id').primary();
    table.text('title');

    //relacionamento 1 (projeto) : n (devs)
    table
      .uuid('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });

exports.down = knex => knex.schema.dropTable('projects');
