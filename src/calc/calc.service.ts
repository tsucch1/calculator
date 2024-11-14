import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Calc } from '../entities/calc.entity';

@Injectable()
export class CalcService {
  calcRepository: any;
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

  // async undateCalc(id: string, calc: Calc): Promise<Calc> {
  //   let CalcToUpdate = await this.findById(id);
  //   // 更新のコード
  //   return await this.calcRepos.save(newCalc);
  // }

  async deleteItem(id: string): Promise<void> {
    await this.calcRepository.delete(id);
  }
}
