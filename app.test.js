process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('./app');
const dbConnection = require('./db/dbConnection');
afterAll(() => dbConnection.destroy());

beforeEach(() => dbConnection.seed.run());
// describe('/api', () => {
//   it('status 404: it returns an error if path does not exist', () => {
//     const methods = ['get', 'post', 'patch', 'put', 'delete'];
//     const methodPromises = methods.map((method) => {
//       return request(app)
//         [method]('/api/hello')
//         .expect(404)
//         .then(({ body: { msg } }) => {
//           expect(msg).toBe('Not found');
//         });
//     });
//     return Promise.all(methodPromises);
//   });
// });
// describe('GET', () => {
//   it('status:200, returns a JSON file with all the available endpoints', () => {
//     return request(app)
//       .get('/api')
//       .expect(200)
//       .then(({ text }) => {
//         const parsed = JSON.parse(text);
//         expect(parsed).toHaveProperty('GET /api');
//         expect(parsed).toHaveProperty('GET /api/accounts');
//       });
//   });
// });
describe('/products', () => {
  // describe('POST', () => {
  //   test('status: 201, should post a meter reading CSV', () => {
  //     return request(app)
  //       .post('/api/readings')
  //       .send([
  //         {
  //           data: ['meter_reading_id', 'account_id', 'reading']
  //         },

  //         {
  //           data: [
  //             '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //             '6f98771c-00d8-4a3d-a179-d5e3b028b54e',
  //             6705
  //           ]
  //         },
  //         {
  //           data: [
  //             '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //             '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //             7084
  //           ]
  //         },
  //         {
  //           data: [
  //             'f2c7b7d2-44d1-4a2d-b2d3-5a7351900fb5',
  //             '7353476a-1d35-4391-a532-47862fb9069d',
  //             1986
  //           ]
  //         }
  //       ])
  //       .expect(201)
  //       .then(({ body }) => {
  //         expect(body).toEqual({
  //           invalidSubmissions: [],
  //           validSubmissions: [
  //             {
  //               meter_reading_id: '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //               account_id: '6f98771c-00d8-4a3d-a179-d5e3b028b54e',
  //               reading: 6705
  //             },
  //             {
  //               meter_reading_id: '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //               account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //               reading: 7084
  //             },
  //             {
  //               meter_reading_id: 'f2c7b7d2-44d1-4a2d-b2d3-5a7351900fb5',
  //               account_id: '7353476a-1d35-4391-a532-47862fb9069d',
  //               reading: 1986
  //             }
  //           ]
  //         });
  //       });
  //   });
  //     test('status: 201, should post a meter reading CSV and filter invalid meter reading format', () => {
  //       return request(app)
  //         .post('/api/readings')
  //         .send([
  //           {
  //             data: ['meter_reading_id', 'account_id', 'reading']
  //           },

  //           {
  //             data: [
  //               '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //               '6f98771c-00d8-4a3d-a179-d5e3b028b54e',
  //               670566
  //             ]
  //           },

  //           {
  //             data: [
  //               '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //               '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //               7084
  //             ]
  //           }
  //         ])
  //         .expect(201)
  //         .then(({ body }) => {
  //           expect(body).toEqual({
  //             invalidSubmissions: [
  //               {
  //                 meter_reading_id: '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //                 account_id: '6f98771c-00d8-4a3d-a179-d5e3b028b54e',
  //                 reading: 670566
  //               }
  //             ],
  //             validSubmissions: [
  //               {
  //                 meter_reading_id: '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //                 account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //                 reading: 7084
  //               }
  //             ]
  //           });
  //         });
  //     });
  //     test('status: 201, should post a meter reading CSV and filter duplicate entries ', () => {
  //       return request(app)
  //         .post('/api/readings')
  //         .send([
  //           {
  //             data: ['meter_reading_id', 'account_id', 'reading']
  //           },

  //           {
  //             data: [
  //               '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //               '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //               7084
  //             ]
  //           },
  //           {
  //             data: [
  //               '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //               '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //               7084
  //             ]
  //           }
  //         ])
  //         .expect(201)
  //         .then(({ body }) => {
  //           expect(body).toEqual({
  //             invalidSubmissions: [
  //               {
  //                 meter_reading_id: '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //                 account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //                 reading: 7084
  //               }
  //             ],
  //             validSubmissions: [
  //               {
  //                 meter_reading_id: '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //                 account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //                 reading: 7084
  //               }
  //             ]
  //           });
  //         });
  //     });
  //     test('status: 201, should post a meter reading CSV and filter invalid Accounts IDs', () => {
  //       return request(app)
  //         .post('/api/readings')
  //         .send([
  //           {
  //             data: ['meter_reading_id', 'account_id', 'reading']
  //           },

  //           {
  //             data: [
  //               '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //               '6f9ff8771testc-00d8-4a3d-a179-d5e3b028b54e',
  //               6705
  //             ]
  //           },
  //           {
  //             data: [
  //               '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //               '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //               7084
  //             ]
  //           }
  //         ])
  //         .expect(201)
  //         .then(({ body }) => {
  //           expect(body).toEqual({
  //             invalidSubmissions: [
  //               {
  //                 meter_reading_id: '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //                 account_id: '6f9ff8771testc-00d8-4a3d-a179-d5e3b028b54e',
  //                 reading: 6705
  //               }
  //             ],
  //             validSubmissions: [
  //               {
  //                 meter_reading_id: '0966665b-bb10-4f94-b903-bd0fb38762d6',
  //                 account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
  //                 reading: 7084
  //               }
  //             ]
  //           });
  //         });
  //     });
  //     describe('Error handling', () => {
  //       test('should return 400', () => {
  //         return request(app)
  //           .post('/api/readings')
  //           .expect(400)
  //           .send([
  //             {
  //               data: ['account_id', 'meter_reading_id', 'reading']
  //             },

  //             {
  //               data: [
  //                 '6a68108b-9ec2-4020-9b54-9fbd319c59f6',
  //                 '6f98771c-00d8-4a3d-a179-d5e3b028b54e',
  //                 6705
  //               ]
  //             }
  //           ])
  //           .then(({ body: { msg } }) => {
  //             expect(msg).toBe(
  //               'Invalid format. Please refer to the template CSV'
  //             );
  //           });
  //       });
  //     });
  //   });
  describe('/GET', () => {
    test('status: 200, returns all products, sorted by timestamp by default', () => {
      return request(app)
        .get('/api/products')
        .expect(200)
        .then(({ body }) => {
          expect(body.products).toHaveLength(6);
          expect(body.products[0]).toMatchObject({
            asin: expect.any(String),
            best_seller_tag__y_or_n: expect.any(String),
            colors: expect.any(Array),
            delivery_type: expect.any(String),
            discount_percentage: expect.any(String),
            image_url: expect.any(String),
            left_in_stock: expect.any(String),
            meta_keywords: expect.any(String),
            product_id: expect.any(String),
            product_name: expect.any(String),
            product_url: expect.any(String),
            sales_price: expect.any(String),
            timestamp: expect.any(String),
            weight: expect.any(String)
          });
          expect(body.products).toBeSortedBy('timestamp', {
            descending: false
          });
        });
    });

    test('status: 200, should accept a query sort by sales_price', () => {
      return request(app)
        .get('/api/products?sort_by=sales_price')
        .expect(200)
        .then(({ body }) => {
          expect(body.products).toBeSortedBy('sales_price', {
            descending: false
          });
        });
    });
    test('status: 200, should accept a query sort by reading', () => {
      return request(app)
        .get('/api/products?sort_by=product_name')
        .expect(200)
        .then(({ body }) => {
          expect(body.products).toBeSortedBy('product_name', {
            descending: false
          });
        });
    });
    test('status: 200, should accept a query order desc', () => {
      return request(app)
        .get('/api/products?order=desc')
        .expect(200)
        .then(({ body }) => {
          expect(body.products).toBeSortedBy('timestamp', {
            descending: true
          });
        });
    });
    test('status: 200, should accept a query sort_by sales_price and order desc', () => {
      return request(app)
        .get('/api/products?sort_by=sales_price&order=desc')
        .expect(200)
        .then(({ body }) => {
          expect(body.products).toBeSortedBy('sales_price', {
            descending: true
          });
        });
    });
  });
  describe('/products/:meta_keyword', () => {
    describe('GET', () => {
      test('should get the product by keyword, sorted by timestamp', () => {
        return request(app)
          .get('/api/products/trainers')
          .expect(200)
          .then(({ body }) => {
            expect(body.products).toHaveLength(3);
            expect(body.products[0].meta_keywords).toEqual(
              expect.stringContaining('trainers')
            );
            expect(body.products).toBeSortedBy('timestamp', {
              descending: false
            });
          });
      });
      test('status: 200, should accept a query sort by sales_price', () => {
        return request(app)
          .get('/api/products/trainers?sort_by=sales_price')
          .expect(200)
          .then(({ body }) => {
            expect(body.products).toBeSortedBy('sales_price', {
              descending: false
            });
          });
      });
      test('status: 200, should accept a query sort by reading', () => {
        return request(app)
          .get('/api/products/trainers?sort_by=product_name')
          .expect(200)
          .then(({ body }) => {
            expect(body.products).toBeSortedBy('product_name', {
              descending: false
            });
          });
      });
      test('status: 200, should accept a query order desc', () => {
        return request(app)
          .get('/api/products/trainers?order=desc')
          .expect(200)
          .then(({ body }) => {
            expect(body.products).toBeSortedBy('timestamp', {
              descending: true
            });
          });
      });
      test('status: 200, should accept a query sort_by sales_price and order desc', () => {
        return request(app)
          .get('/api/products/trainers?sort_by=sales_price&order=desc')
          .expect(200)
          .then(({ body }) => {
            expect(body.products).toBeSortedBy('sales_price', {
              descending: true
            });
          });
      });
    });

    describe('/orders', () => {
      describe('GET', () => {
        test('status: 200, should return a list of the orders sorted by asc order_id', () => {
          return request(app)
            .get('/api/orders')
            .expect(200)
            .then(({ body }) => {
              expect(body.orders).toHaveLength(1);
              expect(body.orders[0]).toMatchObject({
                order_id: expect.any(String),
                product_id: expect.any(String),
                customer_id: expect.any(String),
                payment_id: expect.any(String),
                order_date: expect.any(String),
                ship_date: expect.any(String),
                sales_price: expect.any(String),
                size: expect.any(String),
                color: expect.any(String),
                fulfilled: expect.any(String),
                deleted: expect.any(String),
                paid: expect.any(String)
              });
              expect(body.orders).toBeSortedBy('order_id', {
                descending: false
              });
            });
        });
      });
    });
    describe('/orders', () => {
      describe('GET', () => {
        test('status: 200, should return a list of the customers sorted by asc customer_id', () => {
          return request(app)
            .get('/api/customers')
            .expect(200)
            .then(({ body }) => {
              expect(body.customers).toHaveLength(14);
              expect(body.customers[0]).toMatchObject({
                customer_id: expect.any(String),
                email: expect.any(String),
                first: expect.any(String),
                last: expect.any(String),
                created_at: expect.any(String),
                country: expect.any(String)
              });
              expect(body.customers).toBeSortedBy('customer_id', {
                descending: false
              });
            });
        });
      });
    });
    //     test('status: 200, should accept a query sort by surname', () => {
    //       return request(app)
    //         .get('/api/accounts?sort_by=surname')
    //         .expect(200)
    //         .then(({ body }) => {
    //           expect(body.accounts[0]).toMatchObject({
    //             account_id: expect.any(String),
    //             first_name: expect.any(String),
    //             surname: expect.any(String),
    //             email: expect.any(String)
    //           });
    //           expect(body.accounts).toBeSortedBy('surname', {
    //             descending: false
    //           });
    //         });
    //     });
    //     test('status: 200, should accept a query order desc', () => {
    //       return request(app)
    //         .get('/api/accounts?order=desc')
    //         .expect(200)
    //         .then(({ body }) => {
    //           expect(body.accounts).toHaveLength(7);
    //           expect(body.accounts[0]).toMatchObject({
    //             account_id: expect.any(String),
    //             first_name: expect.any(String),
    //             surname: expect.any(String),
    //             email: expect.any(String)
    //           });
    //           expect(body).toBeSortedBy('account_id', {
    //             descending: true
    //           });
    //         });
    //     });
    //     test('status: 200, should accept a query sort_by surname and order desc', () => {
    //       return request(app)
    //         .get('/api/accounts?sort_by=surname&order=desc')
    //         .expect(200)
    //         .then(({ body }) => {
    //           expect(body.accounts[0]).toMatchObject({
    //             account_id: expect.any(String),
    //             first_name: expect.any(String),
    //             surname: expect.any(String),
    //             email: expect.any(String)
    //           });
    //           expect(body.accounts).toBeSortedBy('surname', {
    //             descending: true
    //           });
    //         });
    //     });
    //   });
    //   describe('/accounts/:account_id', () => {
    //     describe('PATCH', () => {
    //       test('should update the email by account id ', () => {
    //         return request(app)
    //           .patch('/api/accounts/5e345cff-fb8f-4ed6-a961-8818a65392c9')
    //           .send({ email: 'newtestemail@gmail.com' })
    //           .expect(200)
    //           .then(({ body }) => {
    //             expect(body.account).toMatchObject({
    //               account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
    //               first_name: expect.any(String),
    //               surname: expect.any(String),
    //               email: 'newtestemail@gmail.com'
    //             });
    //           });
    //       });

    //       test('should update the name by account id ', () => {
    //         return request(app)
    //           .patch('/api/accounts/5e345cff-fb8f-4ed6-a961-8818a65392c9')
    //           .send({ first_name: 'newtestname' })
    //           .expect(200)
    //           .then(({ body }) => {
    //             expect(body.account).toMatchObject({
    //               account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
    //               first_name: 'newtestname',
    //               surname: expect.any(String),
    //               email: expect.any(String)
    //             });
    //           });
    //       });
    //       test('should update the surname by account id ', () => {
    //         return request(app)
    //           .patch('/api/accounts/5e345cff-fb8f-4ed6-a961-8818a65392c9')
    //           .send({ surname: 'newtestsurname' })
    //           .expect(200)
    //           .then(({ body }) => {
    //             expect(body.account).toMatchObject({
    //               account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
    //               first_name: expect.any(String),
    //               surname: 'newtestsurname',
    //               email: expect.any(String)
    //             });
    //           });
    //       });
    //       test('should update multiple fields by account id ', () => {
    //         return request(app)
    //           .patch('/api/accounts/5e345cff-fb8f-4ed6-a961-8818a65392c9')
    //           .send({
    //             surname: 'newtestsurname',
    //             email: 'newtestemail@gmail.com',
    //             first_name: 'newtestname'
    //           })
    //           .expect(200)
    //           .then(({ body }) => {
    //             expect(body.account).toMatchObject({
    //               account_id: '5e345cff-fb8f-4ed6-a961-8818a65392c9',
    //               first_name: 'newtestname',
    //               surname: 'newtestsurname',
    //               email: 'newtestemail@gmail.com'
    //             });
    //           });
    //       });
    //     });
    describe('Error handling', () => {
      // test('should return 400 if keyword ', () => {
      //   return request(app)
      //     .patch('/api/accounts/5e345cff-fb8f-4ed6-a961-8818a65392c9')
      //     .send({
      //       name: 'newtestsurname'
      //     })
      //     .expect(400)
      //     .then(({ body: { msg } }) => {
      //       expect(msg).toBe('Invalid entry');
      //     });
      // });
      test('should return 404 if keyword is not found', () => {
        return request(app)
          .get('/api/products/bag')
          .expect(404)
          .then(({ body: { msg } }) => {
            expect(msg).toBe('Keyword bag not found');
          });
      });
    });
  });
});
