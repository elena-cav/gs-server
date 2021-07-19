process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('./app');
const dbConnection = require('./db/dbConnection');
afterAll(() => dbConnection.destroy());

beforeEach(() => dbConnection.seed.run());
describe('/api', () => {
  it('status 404: it returns an error if path does not exist', () => {
    const methods = ['get', 'post', 'patch', 'put', 'delete'];
    const methodPromises = methods.map((method) => {
      return request(app)
        [method]('/api/hello')
        .expect(404)
        .then(({ body: { msg } }) => {
          expect(msg).toBe('Not found');
        });
    });
    return Promise.all(methodPromises);
  });
});
describe('GET', () => {
  it('status:200, returns a JSON file with all the available endpoints', () => {
    return request(app)
      .get('/api')
      .expect(200)
      .then(({ text }) => {
        const parsed = JSON.parse(text);
        expect(parsed).toHaveProperty('GET /api');
        expect(parsed).toHaveProperty('GET /api/products');
      });
  });
});
describe('/products', () => {
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
                fulfilled: expect.any(Boolean),
                deleted: expect.any(Boolean),
                paid: expect.any(Boolean)
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

    describe('Error handling', () => {
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
