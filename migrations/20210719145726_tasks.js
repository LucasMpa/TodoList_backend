exports.up = function (knex, Promise) {
  return knex.schema.createTable("tasks", (table) => {
    table.increments("id").primary();
    table.string("title").notNull();
    table.string("description").notNull();
    table.boolean("is_conclued").notNull().defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("tasks");
};
