import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ColaboradorModule } from './colaborador/colaborador.module.js';

@Module({
  imports: [ColaboradorModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
