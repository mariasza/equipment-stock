import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Equipments extends Model<Equipments> {
  @Column({ primaryKey: true })
  code: number;

  @Column
  name: string;

  @Column
  brand: string;

  @Column
  amount: number;

  @Column
  observation: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
