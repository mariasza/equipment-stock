import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { v4 as uuidv4 } from 'uuid';
import { Equipments } from './../../database/models/equipment';
import { InjectModel } from '@nestjs/sequelize';
import { PaginationService } from './../../utils/pagination/pagination.service';
import { CheckStockEquipmentDto } from './dto/check-stock-equipment.dto';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectModel(Equipments) private equipmentModel,
    private readonly paginationService: PaginationService,
  ) {}

  async create(dto: CreateEquipmentDto) {
    const code = uuidv4();
    return this.equipmentModel.create({ code, ...dto }).catch((error) => {
      console.log(error);
      throw new HttpException(error.errors[0].message, HttpStatus.BAD_REQUEST);
    });
  }

  async findAll(page: number, size: number) {
    const { limit, offset } = this.paginationService.getPagination(page, size);

    let result: any;
    await this.equipmentModel.findAndCountAll(limit, offset).then((res) => {
      res = JSON.parse(JSON.stringify(res, null, 0));
      result = this.paginationService.getPagingData(res, page, limit);
    });

    return result;
  }

  findOne(code: string) {
    return this.equipmentModel.findOne({ where: { code } });
  }

  async update(code: string, dto: UpdateEquipmentDto) {
    await this.equipmentModel
      .update(dto, { where: { code } })
      .catch((error) => {
        console.log(error);
        throw new HttpException(
          error.errors[0].message,
          HttpStatus.BAD_REQUEST,
        );
      });
    return this.findOne(code);
  }

  async checkStock(code: string, dto: CheckStockEquipmentDto) {
    const { amount } = dto;
    const equipment = await this.findOne(code);
    if (amount == equipment.amount) return `Data match. Stock already updated.`;
    else {
      await this.update(code, dto);
      return `Data doesn't match. The system had registered ${equipment.amount} items. Equipment quantity has been updated to ${amount}.`;
    }
  }

  remove(code: string) {
    return this.equipmentModel.destroy({ where: { code } });
  }
}
