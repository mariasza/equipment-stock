import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const configSequelize: SequelizeModuleOptions = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  dialect: 'postgres',
  timezone: '-04:00',
  models: [],
};
