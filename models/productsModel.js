const dbConnection = require('../db/dbConnection');

// exports.checkAccountExists = ({ account_id }) => {
//   return dbConnection
//     .select('*')
//     .from('accounts')
//     .where({ account_id })
//     .then(([account]) => {
//       if (account === undefined) {
//         return Promise.reject({
//           status: 404,
//           msg: `Account ID ${account_id} not found`
//         });
//       }
//     });
// };

exports.fetchProducts = () => {
  console.log('in model')
  return dbConnection
    .select('*')
    .from('products')
    // .orderBy(sort_by || 'account_id', order || 'asc');
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
