import { Entity, Column } from 'typeorm';

@Entity()
export class Calc {
  @Column({ comment: '計算式' })
  fomula: string;

  @Column({ comment: '結果' })
  result: number;

  @Column({ comment: 'メモ' })
  memo: string;
}
