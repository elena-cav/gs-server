const {
  fetchCustomers
} = require('../models/customersModel');

exports.getCustomers = (req, res, next) => {
  fetchCustomers()
    .then((customers) => {
      res.status(200).send({ customers });
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
