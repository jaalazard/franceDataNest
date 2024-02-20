import { Module } from '@nestjs/common';
import { TownService } from './town.service';
import { TownController } from './town.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Town } from './town.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Town])],
  controllers: [TownController],
  providers: [TownService],
})
export class TownModule {}
