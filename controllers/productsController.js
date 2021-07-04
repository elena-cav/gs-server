const {
  fetchProducts,
  fetchProductsByKeyword,
  checkKeywordExists
} = require('../models/productsModel');

exports.getProducts = (req, res, next) => {
  fetchProducts(req.query)
    .then((products) => {
      res.status(200).send({ products });
    })
    .catch((err) => next(err));
};

exports.getProductsByKeyword = (req, res, next) => {
  checkKeywordExists(req.params)
    .then(() => {
      return fetchProductsByKeyword(req.query, req.params);
    })
    .then((products) => {
      res.status(200).send({ products });
    })
    .catch((err) => next(err));
};
