import {
  Get,
  Post,
  Body,
  Controller,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
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

  @Patch('/calc/:id')
  async updateCalc(
    @Param('id') id: number,
    @Body('fomula') fomula: string,
    @Body('result') result: number,
    @Body('memo') memo: string,
  ) {
    return this.calcService.updateCalc(id, fomula, result, memo);
  }

  @Delete('/calc/:id')
  async deleteItem(@Param('id') id: string): Promise<void> {
    return await this.calcService.deleteItem(id);
  }
}
