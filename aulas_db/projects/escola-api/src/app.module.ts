import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AlunosModule } from './alunos/alunos.module.js';
import { MongooseModule } from '@nestjs/mongoose';


export const { ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/escola_db'),
    AlunosModule
  ],
})

export class AppModule {}
