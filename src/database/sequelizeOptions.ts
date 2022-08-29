import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const configSequelize: SequelizeModuleOptions = {
  username: 'user',
  password: '12345',
  database: 'mysqldb',
  port: 3306,
  dialect: 'mysql',
  timezone: '-04:00',
  models: [],
};
