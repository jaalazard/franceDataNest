import { Injectable } from '@nestjs/common';
import { Town } from './town.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TownService {
  constructor(
    @InjectRepository(Town) private townRepository: Repository<Town>,
  ) {}

  async findAllByDepartmentCode(department_code: string): Promise<Town[]> {
    return this.townRepository.find({
      where: { ville_departement: department_code },
    });
  }
}
