import { Controller, Get, Param } from '@nestjs/common';
import { TownService } from '../town/town.service';

@Controller('town')
export class TownController {
  constructor(private readonly townService: TownService) {}

  @Get(':department_code')
  findAllByDepartmentCode(@Param('department_code') department_code: string) {
    return this.townService.findAllByDepartmentCode(department_code);
  }
}
