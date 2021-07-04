exports.up = function (knex) {
  return knex.schema.createTable('products', (productsTable) => {
    productsTable.string('product_id').primary();
    productsTable.timestamp('timestamp').notNullable();
    productsTable.string('asin').notNullable();
    productsTable.string('product_url').notNullable();
    productsTable.string('product_name').notNullable();
    productsTable.string('image_url').notNullable();
    productsTable.string('brand').notNullable();
    productsTable.string('sales_price').notNullable();
    productsTable.string('discount_percentage');
    productsTable.string('weight');
    productsTable.json('colors');
    productsTable.string('delivery_type');
    productsTable.string('meta_keywords');
    productsTable.string('left_in_stock');
    productsTable.string('best_seller_tag__y_or_n');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
