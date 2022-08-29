import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { configSequelize } from './database/sequelizeOptions';
import { EquipmentModule } from './app/equipment/equipment.module';

@Module({
  imports: [SequelizeModule.forRoot(configSequelize), EquipmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
