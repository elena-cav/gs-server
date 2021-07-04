const productsRouter = require('express').Router();
const {
  getProducts,
  getProductsByKeyword
} = require('../controllers/productsController');

productsRouter.route('/').get(getProducts);
productsRouter.route('/:meta_keyword').get(getProductsByKeyword);
module.exports = productsRouter;
