exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.handle400s = (err, req, res, next) => {
  if (err.code === '42703' || err.code === '22P02') {
    res.status(400).send({ msg: 'Bad Request' }).next(err);
  }
};

exports.handle500s = (err, req, res, next) => {
  res.status(500).send({ msg: 'Server error' });
};

exports.handle404s = (req, res, next) => {
  res.status(404).send({ msg: 'Not found' });
};
