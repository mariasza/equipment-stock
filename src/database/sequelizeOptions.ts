import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Equipments } from './models/equipment';

export const configSequelize: SequelizeModuleOptions = {
  username: 'pguser',
  password: 'pgpassword',
  database: 'pgsql',
  port: 5432,
  dialect: 'postgres',
  timezone: '-04:00',
  models: [Equipments],
};
