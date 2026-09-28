import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { SecurityController } from './security/security.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [AppController, SecurityController],
  providers: [AppService],
})
export class AppModule {}
