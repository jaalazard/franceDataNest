import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class Region {
  @PrimaryGeneratedColumn()
  region_id: number;

  @Column({ length: 30 })
  region_nom: string;

  @Column({ length: 3 })
  @Index()
  region_code: string;

  @OneToMany(() => Department, (department) => department.departement_region)
  departments: Department[];
}
