exports.up = function (knex) {
  return knex.schema.createTable('orders', (ordersTable) => {
    ordersTable.string('order_id').primary();
    ordersTable.string('product_id').references('products.product_id');
    ordersTable.string('customer_id').references('customers.customer_id');
    ordersTable.string('payment_id').notNullable();
    ordersTable.date('order_date').notNullable();
    ordersTable.date('ship_date').notNullable();
    ordersTable.string('sales_price');
    ordersTable.string('size');
    ordersTable.string('color');
    ordersTable.boolean('fulfilled');
    ordersTable.boolean('deleted');
    ordersTable.boolean('paid');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('orders');
};
