const ENV = process.env.NODE_ENV || 'development';
const { DB_URL } = process.env;

const baseConfig = {
  client: 'pg',

  migrations: {
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

const customConfig = {
  development: {
    connection: { database: 'goldenshoe', username: 'elena', password: '45lkj' }
  },
  test: {
    connection: {
      database: 'goldenshoe_test',
      username: 'elena',
      password: '45lkj'
    }
  },
  production: {
    connection: {
      connectionString: DB_URL,
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
};
module.exports = { ...baseConfig, ...customConfig[ENV] };
