module.exports = {
  development: {
    username: 'pguser',
    password: 'pgpassword',
    database: 'pgsql',
    host: 'localhost',
    port: 5432,
    ssl: { rejectUnauthorized: false },
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
