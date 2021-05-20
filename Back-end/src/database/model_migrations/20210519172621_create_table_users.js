exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.uuid('id').primary(); //create id as int not null, primary and auto_increment
    table.text('username').notNullable(); //create varchar column nullable

    table.dateTime('created_at').notNullable().defaultTo(knex.fn.now());
    // usando datetime em vez de timestamp, consigo fazer esse raw com o update sem precisar de criar uma procedure com trigger (coisa que não sei fazer :)
    table
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  });

exports.down = knex => knex.schema.dropTable('users');
