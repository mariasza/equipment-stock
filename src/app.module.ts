import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { configSequelize } from './database/sequelizeOptions';

@Module({
  imports: [SequelizeModule.forRoot(configSequelize)],
  controllers: [],
  providers: [],
})
export class AppModule {}
