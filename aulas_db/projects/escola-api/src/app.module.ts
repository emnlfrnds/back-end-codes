import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { createObserveModule } from '@nestjs/observe';
import joi from 'joi';
import { AlunosModule } from './alunos/alunos.module.js';
export const { ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        NODE_ENV: joi
          .string()
          .valid('desenvolvimento', 'producao', 'teste')
          .default('desenvolvimento'),
        PORT: joi.number().default(3000),
        MONGO_URI: joi.string().required(),
        JWT_SECRET: joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    AlunosModule,
  ],
})
export class AppModule {}
