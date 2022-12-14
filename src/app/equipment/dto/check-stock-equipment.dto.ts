import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CheckStockEquipmentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;
}
