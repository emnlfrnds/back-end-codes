import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MidiaController } from './midia/midia.controller.js';
import { MidiaModule } from './midia/midia.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [MidiaModule],
  controllers: [AppController, MidiaController],
  providers: [AppService],
})
export class AppModule {}
