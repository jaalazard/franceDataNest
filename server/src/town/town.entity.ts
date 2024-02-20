import { Department } from '../department/department.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Town {
  @PrimaryGeneratedColumn()
  ville_id: number;

  @Column({ nullable: true })
  ville_departement: string;

  @ManyToOne(() => Department, (department) => department.departement_code)
  @JoinColumn({
    name: 'ville_departement',
    referencedColumnName: 'departement_code',
  })
  department: Department;

  @Column({ nullable: true })
  ville_slug: string;

  @Column({ nullable: true })
  ville_nom: string;

  @Column({ nullable: true })
  ville_nom_simple: string;

  @Column({ nullable: true })
  ville_nom_reel: string;

  @Column({ nullable: true })
  ville_nom_soundex: string;

  @Column({ nullable: true })
  ville_nom_metaphone: string;

  @Column({ nullable: true })
  ville_code_postal: string;

  @Column({ nullable: true })
  ville_commune: number;

  @Column()
  ville_code_commune: number;

  @Column({ nullable: true })
  ville_arrondissement: number;

  @Column({ nullable: true })
  ville_canton: string;

  @Column({ nullable: true })
  ville_amdi: number;

  @Column({ nullable: true })
  ville_population_2010: number;

  @Column({ nullable: true })
  ville_population_1999: number;

  @Column({ nullable: true })
  ville_population_2012: number;

  @Column({ nullable: true })
  ville_densite_2010: number;

  @Column({ nullable: true })
  ville_surface: number;

  @Column({ nullable: true })
  ville_longitude_deg: number;

  @Column({ nullable: true })
  ville_latitude_deg: number;

  @Column({ nullable: true })
  ville_longitude_grd: string;

  @Column({ nullable: true })
  ville_latitude_grd: string;

  @Column({ nullable: true })
  ville_longitude_dms: string;

  @Column({ nullable: true })
  ville_latitude_dms: string;

  @Column({ nullable: true })
  ville_zmin: number;

  @Column({ nullable: true })
  ville_zmax: number;
}
