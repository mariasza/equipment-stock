import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { Equipments } from './../../database/models/equipment';
import { PaginationService } from './../../utils/pagination/pagination.service';
import { EquipmentController } from './equipment.controller';
import { EquipmentService } from './equipment.service';
import { configSequelize } from './../../database/sequelizeOptions';

describe('EquipmentController', () => {
  let controller: EquipmentController;
  let service: EquipmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRoot(configSequelize),
        SequelizeModule.forFeature([Equipments]),
      ],
      controllers: [EquipmentController],
      providers: [EquipmentService, PaginationService],
    }).compile();

    controller = module.get<EquipmentController>(EquipmentController);
    service = module.get<EquipmentService>(EquipmentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of equipments', async () => {
    const result = ['test'];
    jest.spyOn(service, 'findAll').mockImplementation(async () => result);
    expect(await controller.findAll(0, 10)).toBe(result);
  });

  it('should return an equipment', async () => {
    const result = { name: 'test' };
    jest.spyOn(service, 'findOne').mockImplementation(async () => result);
    expect(await controller.findOne('test')).toBe(result);
  });
});
