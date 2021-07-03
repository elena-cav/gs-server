exports.up = function (knex) {
  return knex.schema.createTable("customers", (customersTable) => {
    customersTable.string("customer_id").primary();
    customersTable.string("email").notNullable();
    customersTable.string("first").notNullable();
    customersTable.string("last").notNullable();
    customersTable.timestamp("created_at").notNullable();
    customersTable.string("country").notNullable();
    customersTable.json("address")
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("customers");
};
