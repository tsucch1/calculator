import { Entity, Column } from 'typeorm';

@Entity()
export class Calc {
  @Column({ comment: '計算式' })
  fomula: string;

  @Column({ comment: '結果' })
  result: number;

  @Column({ default: false, comment: 'メモ' })
  memo: string;
}
