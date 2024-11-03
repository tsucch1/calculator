import { Module } from '@nestjs/common';
import { CalcModule } from './calc/calc.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CalcModule,
    // 追加
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sqlite.db',
      synchronize: true,
      // コンパイル後のフォルダを指定しないとエラーになる
      entities: ['dist/entities/*.entity.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
