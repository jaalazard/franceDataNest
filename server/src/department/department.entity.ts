import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Region } from '../region/region.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  departement_id: number;

  @Column()
  departement_code: number;

  @Column({ length: 35 })
  departement_nom: string;

  @Column({ length: 3 })
  departement_region: string;

  @ManyToOne(() => Region, (region) => region.departments)
  @JoinColumn({
    name: 'departement_region',
    referencedColumnName: 'region_code',
  })
  region: Region;
}
