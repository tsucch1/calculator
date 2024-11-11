import { Module } from '@nestjs/common';
import { CalcController } from './calc.controller';
import { CalcService } from './calc.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Calc } from 'src/entities/calc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Calc])],
  controllers: [CalcController],
  providers: [CalcService],
})
export class CalcModule {}
