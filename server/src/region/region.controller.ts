import { Controller, Get, Param } from '@nestjs/common';
import { RegionService } from '../region/region.service';

@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @Get()
  findAll() {
    return this.regionService.findAll();
  }

  @Get(':region_code')
  findOneByCode(@Param('region_code') region_code: string) {
    return this.regionService.findOneByCode(region_code);
  }
}
