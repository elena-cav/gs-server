const apiRouter = require('express').Router();
// const { handle404s } = require('../errors');
// const { getAllEndpoints } = require('../controllers/apiController');

const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');
const customersRouter = require('./customersRouter');

// apiRouter.route('/').get(getAllEndpoints);
apiRouter.use('/products', productsRouter);
apiRouter.use('/orders', ordersRouter);
apiRouter.use('/customers', customersRouter);

// apiRouter.route('/*').all(handle404s);

module.exports = apiRouter;
