import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegionModule } from './region/region.module';
import { DepartmentModule } from './department/department.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './config/database.config';
import { TownController } from './town/town.controller';
import { TownModule } from './town/town.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],

      useFactory: () => databaseConfig,
    }),
    RegionModule,
    DepartmentModule,
    TownModule,
  ],
  controllers: [AppController, TownController],
  providers: [AppService],
})
export class AppModule {}
