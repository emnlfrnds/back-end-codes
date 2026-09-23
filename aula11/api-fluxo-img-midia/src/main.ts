import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: 'api/uploads',
  });

  const PORT = 3000;
  await app.listen(PORT);
  console.log(`[SERVER] Aplicação rodando - http://localhost:${PORT}`);
}

bootstrap();
