import { Logger, ValidationPipe } from '@nestjs/common';
import { type ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule, ObserveInstrument } from './app.module.js';
import authConfig from './config/auth.config.js';
import databaseConfig from './config/database.config.js';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  const loggerDatabase = new Logger('DATABSE');
  const loggerAuth = new Logger('AUTH');

  const configDb = app.get<ConfigType<typeof databaseConfig>>(
    databaseConfig.KEY,
  );
  const configAuth = app.get<ConfigType<typeof authConfig>>(authConfig.KEY);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('API Escola')
    .setDescription('API para gerenciamento de alunos')
    .setVersion('1.0.0')
    .addTag('alunos')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`API escola rodando na Porta ${await app.getUrl()}`, 'Port');
  loggerDatabase.log(`Conectado em: ${configDb.uri}`);
  loggerDatabase.log(`Pool Máximo: ${configDb.maxPoolSize}`);
  loggerAuth.log(
    `Chave secreta "que não é mais secreta": ${configAuth.jwtSecret}`,
  );
  loggerAuth.log(`A chave expira em: ${configAuth.jwtExpiresIn}`);
}
await bootstrap();
