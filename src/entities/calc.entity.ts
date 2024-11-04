import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Calc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '計算式' })
  fomula: string;

  @Column({ comment: '結果' })
  result: number;

  @Column({ comment: 'メモ' })
  memo: string;
}
