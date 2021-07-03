const productsRouter = require('express').Router();
const {
  getProducts,
} = require('../controllers/productsController');

productsRouter.route('/').get(getProducts);
// accountsRouter.route('/:account_id').patch(patchAccount);
module.exports = productsRouter;
