import { Controller, Get, Param } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':departement_code')
  findOneByCode(@Param('departement_code') departement_code: string) {
    return this.departmentService.findOneByCode(departement_code);
  }

  @Get(':region_code/department')
  findAllByRegion(@Param('region_code') region_code: string) {
    return this.departmentService.findAllByRegionCode(region_code);
  }
}
