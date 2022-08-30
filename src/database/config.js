module.exports = {
  development: {
    username: process.env.NF_EQUIPMENT_STOCK_DB_USERNAME,
    password: process.env.NF_EQUIPMENT_STOCK_DB_PASSWORD,
    database: process.env.NF_EQUIPMENT_STOCK_DB_DATABASE,
    port: parseInt(process.env.NF_EQUIPMENT_STOCK_DB_PORT),
    dialect: 'mysql',
    host: process.env.NF_EQUIPMENT_STOCK_DB_HOST,
    ssl: {
      ca: fs.readFileSync(process.env.SSL_CA_CERTIFICATES),
    },
  },
};
