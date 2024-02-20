import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { Region } from '../region/region.entity';
import { Town } from '../town/town.entity';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  departement_id: number;

  @Column()
  @Index()
  departement_code: string;

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

  @OneToMany(() => Town, (town) => town.ville_departement)
  towns: Town[];
}
