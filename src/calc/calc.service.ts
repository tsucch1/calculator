import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calc } from '../entities/calc.entity';

@Injectable()
export class CalcService {
  // calcRepository: any;
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

  async updateCalc(
    id: number,
    fomula: string,
    result: number,
    memo: string,
  ): Promise<any> {
    // select * from calc where id=6
    let calcToUpdate = await this.calcRepos.find({
      where: { id: id },
    });
    if (calcToUpdate.length > 0) {
      calcToUpdate[0].fomula = fomula;
      calcToUpdate[0].result = result;
      calcToUpdate[0].memo = memo;
    } else {
      return '対象データが存在しません';
    }
    return await this.calcRepos.save(calcToUpdate);
  }

  async deleteItem(id: string): Promise<void> {
    await this.calcRepos.delete(id);
  }
}
