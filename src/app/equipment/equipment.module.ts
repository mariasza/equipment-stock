import { Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { Equipments } from 'src/database/models/equipment';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaginationService } from 'src/utils/pagination/pagination.service';

@Module({
  imports: [SequelizeModule.forFeature([Equipments])],
  controllers: [EquipmentController],
  providers: [EquipmentService, PaginationService],
})
export class EquipmentModule {}
