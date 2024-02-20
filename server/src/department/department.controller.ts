import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  findAll() {
    console.log('yo');

    return this.departmentService.findAll();
  }
}
