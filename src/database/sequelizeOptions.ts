import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Equipments } from './models/equipment';

export const configSequelize: SequelizeModuleOptions = {
  username: 'vfqqsobjvgdssc',
  password: '221195999280e0796d4fb0dd9b92b0e03f7a76b760720448cba1d3ba42a93394',
  database: 'd5l17cuangv5bv',
  port: 5432,
  host: 'ec2-44-205-63-142.compute-1.amazonaws.com',
  uri: 'postgres://vfqqsobjvgdssc:221195999280e0796d4fb0dd9b92b0e03f7a76b760720448cba1d3ba42a93394@ec2-44-205-63-142.compute-1.amazonaws.com:5432/d5l17cuangv5bv',
  dialect: 'postgres',
  timezone: '-04:00',
  models: [Equipments],
};
