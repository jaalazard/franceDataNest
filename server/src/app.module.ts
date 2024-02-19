import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionController } from './region/region.controller';
import { RegionModule } from './region/region.module';
import { DepartmentService } from './department/department.service';
import { DepartmentModule } from './department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: () => databaseConfig,
    }),
    RegionModule,
    DepartmentModule,
  ],
  controllers: [AppController, RegionController],
  providers: [AppService, DepartmentService],
})
export class AppModule {}
