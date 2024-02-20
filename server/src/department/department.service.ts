import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from '../department/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private DepartmentRepository: Repository<Department>,
  ) {}

  async findAll(): Promise<Department[]> {
    return this.DepartmentRepository.find();
  }

  async findOneByCode(code: string): Promise<Department> {
    return this.DepartmentRepository.findOne({
      where: { departement_code: code },
    });
  }

  async findAllByRegionCode(region_code: string): Promise<Department[]> {
    return this.DepartmentRepository.find({
      where: { departement_region: region_code },
    });
  }
}
