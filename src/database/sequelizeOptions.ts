import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Equipments } from './models/equipment';
import * as fs from 'fs';

export const configSequelize = {
  username: process.env.NF_EQUIPMENT_STOCK_DB_USERNAME,
  password: process.env.NF_EQUIPMENT_STOCK_DB_PASSWORD,
  database: process.env.NF_EQUIPMENT_STOCK_DB_DATABASE,
  port: parseInt(process.env.NF_EQUIPMENT_STOCK_DB_PORT),
  dialect: 'mysql',
  timezone: '-03:00',
  ssl: true,
  dialectOptions: {
    ssl: {
      ca: fs.readFileSync(process.env.SSL_CA_CERTIFICATES),
    },
  },
  models: [Equipments],
} as SequelizeModuleOptions;
