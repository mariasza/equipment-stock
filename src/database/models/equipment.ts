import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Equipment extends Model<Equipment> {
  @Column({ primaryKey: true })
  code: string;

  @Column
  name: string;

  @Column
  brand: string;

  @Column
  amount: number;

  @Column
  observation: Date;

  @Column
  updatedAt: Date;
}
