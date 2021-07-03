const ordersRouter = require('express').Router();
const {
  getOrders} = require('../controllers/ordersController');

ordersRouter.route('/').get(getOrders);
module.exports = ordersRouter;
