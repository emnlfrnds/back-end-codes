import { Module } from '@nestjs/common';
import { ConfigModule, type ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { createObserveModule } from '@nestjs/observe';
import joi from 'joi';
import { AlunosModule } from './alunos/alunos.module.js';
import authConfig from './config/auth.config.js';
import databaseConfig from './config/database.config.js';
export const { ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig],
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
      inject: [databaseConfig.KEY],
      useFactory: (dbconfig: ConfigType<typeof databaseConfig>) => ({
        uri: dbconfig.uri,
        maxPoolSize: dbconfig.maxPoolSize,
      }),
    }),
    AlunosModule,
  ],
})
export class AppModule {}
