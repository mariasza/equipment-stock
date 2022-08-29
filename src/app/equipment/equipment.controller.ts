import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CheckStockEquipmentDto } from './dto/check-stock-equipment.dto';

@ApiTags('Equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @ApiOperation({ summary: 'Create Equipment' })
  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @ApiOperation({ summary: 'Find all Equipment' })
  @Get()
  findAll(@Query('page') page: number, @Query('size') size: number) {
    return this.equipmentService.findAll(page, size);
  }

  @ApiOperation({ summary: 'Find one Equipment' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(id);
  }

  @ApiOperation({ summary: 'Update Equipment' })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEquipmentDto: UpdateEquipmentDto,
  ) {
    return this.equipmentService.update(id, updateEquipmentDto);
  }

  @ApiOperation({ summary: 'Check Stock Equipment' })
  @Patch('check-stock/:id')
  checkStock(@Param('id') id: string, @Body() dto: CheckStockEquipmentDto) {
    return this.equipmentService.checkStock(id, dto);
  }

  @ApiOperation({ summary: 'Delete Equipment' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(id);
  }
}
