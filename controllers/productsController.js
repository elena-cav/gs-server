const {
  fetchProducts
} = require('../models/productsModel');

exports.getProducts = (req, res, next) => {
  console.log('in controller')
  fetchProducts()
    .then((products) => {
      console.log('in here')
      res.status(200).send({ products });
    })
    .catch((err) => next(err));
};

// exports.patchAccount = (req, res, next) => {
//   checkAccountExists(req.params)
//     .then(() => {
//       return updateAccount(req.body, req.params);
//     })
//     .then((account) => {
//       res.status(200).send({ account });
//     })
//     .catch((err) => next(err));
// };
