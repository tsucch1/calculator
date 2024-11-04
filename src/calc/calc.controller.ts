import { Get, Post, Body, Controller } from '@nestjs/common';

@Controller()
export class CalcController {
  constructor(private readonly calcService: CalcService) {}

  @Get('/calc')
  findAll(): Promise<Calc[]> {
    return this.calcService.findAll();
  }

  @Post('/calc')
  add(
    @Body('name') name: string,
    @Body('description') description: string,
  ): Promise<Calc> {
    return this.calcService.add({
      id: undefined,
      name: name,
      description: description,
    });
  }
}
