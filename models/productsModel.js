const dbConnection = require('../db/dbConnection');

exports.checkKeywordExists = ({ meta_keyword }) => {
  return dbConnection
    .select('*')
    .from('products')
    .where('meta_keywords', 'like', `%${meta_keyword}%`)
    .then(([product]) => {
      if (product === undefined) {
        return Promise.reject({
          status: 404,
          msg: `Keyword ${meta_keyword} not found`
        });
      }
    });
};

exports.fetchProducts = ({ sort_by, order }) => {
  return dbConnection
    .select('*')
    .from('products')
    .orderBy(sort_by || 'timestamp', order || 'asc');
};

exports.fetchProducts = ({ sort_by, order }) => {
  return dbConnection
    .select('*')
    .from('products')
    .orderBy(sort_by || 'timestamp', order || 'asc');
};

exports.fetchProductsByKeyword = ({ sort_by, order }, { meta_keyword }) => {
  return dbConnection
    .select('*')
    .from('products')
    .orderBy(sort_by || 'timestamp', order || 'asc')
    .where('meta_keywords', 'like', `%${meta_keyword}%`);
};

// exports.updateAccount = (input, { account_id }) => {
//   const { email, first_name, surname } = input;

//   const validInput = (key) =>
//     key === 'email' || key === 'first_name' || key === 'surname';

//   const inputsAreInvalid = !Object.keys(input).every(validInput);

//   const invalidInputsRej = () => {
//     return Promise.reject({
//       status: 400,
//       msg: `Invalid entry`
//     });
//   };

//   if (inputsAreInvalid) return invalidInputsRej();

//   return dbConnection
//     .select('*')
//     .from('accounts')
//     .where({ account_id })
//     .update({ email, first_name, surname })
//     .returning('*')
//     .then(([account]) => {
//       return account;
//     });
// };
