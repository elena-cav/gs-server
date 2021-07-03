const { productsData, ordersData, customersData } = require('../data/index');

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return Promise.all([
        knex.insert(productsData).into('products'),
        knex.insert(customersData).into('customers')
      ]);
    }).then(() => {
            return knex.insert(ordersData).into('orders'); 
    })
};
