exports.up = (knex) =>
  knex.schema.createTable("comments", (table) => {
    table.uuid("id").primary();
    table.text("user_comments").notNullable();
    table.text("audio_path").notNullable();

    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());

    table
      .dateTime("updated_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });

exports.down = (knex) => knex.schema.dropTable("comments");
