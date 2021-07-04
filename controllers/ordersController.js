const { fetchOrders } = require('../models/ordersModel');

// exports.postReadings = (req, res, next) => {
//   Promise.all([sendReadings(req.body), validateKeys(req.body)])
//     .then(([readings]) => {
//       res.status(201).send(readings);
//     })
//     .catch((err) => next(err));
// };
exports.getOrders = (req, res, next) => {
  fetchOrders(req.query)
    .then((orders) => {
      res.status(200).send({ orders });
    })
    .catch((err) => next(err));
};
