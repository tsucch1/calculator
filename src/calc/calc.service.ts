import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Calc } from '../entities/calc.entity';

@Injectable()
export class CalcService {
  constructor(
    @InjectRepository(Calc) private readonly calcRepos: Repository<Calc>,
  ) {}

  async add(calc: Calc): Promise<Calc> {
    let newCalc = this.calcRepos.create(calc);
    return await this.calcRepos.save(newCalc);
  }

  async findAll(): Promise<Calc[]> {
    return await this.calcRepos.find();
  }
}
