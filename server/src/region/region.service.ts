import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from '../region/region.entity';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region) private regionRepository: Repository<Region>,
  ) {}

  async findAll(): Promise<Region[]> {
    return this.regionRepository.find();
  }

  async findOneByCode(region_code: string): Promise<Region> {
    return this.regionRepository.findOne({
      where: { region_code: region_code },
    });
  }
}
