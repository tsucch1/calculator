import { Get, Post, Body, Controller } from '@nestjs/common';
import { CalcService } from './calc.service';
import { Calc } from 'src/entities/calc.entity';

@Controller()
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Get('/calc')
  findAll(): Promise<Calc[]> {
    return this.calcService.findAll();
  }

  @Post('/calc')
  add(
    @Body('fomula') fomula: string,
    @Body('result') result: number,
    @Body('memo') memo: string,
  ): Promise<Calc> {
    return this.calcService.add({
      id: undefined,
      // undefinedはあまり使わない
      fomula: fomula,
      result: result,
      memo: memo,
    });
  }
}
