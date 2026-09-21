import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { ConvidadosController } from './controllers/convidados/convidados.controller.js';
import { ConvidadoService } from './services/convidado/convidado.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, ConvidadosController],
  providers: [AppService, ConvidadoService],
})
export class AppModule {}
