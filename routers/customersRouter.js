const customersRouter = require('express').Router();
const {
  getCustomers} = require('../controllers/customersController');

customersRouter.route('/').get(getCustomers);
module.exports = customersRouter;
