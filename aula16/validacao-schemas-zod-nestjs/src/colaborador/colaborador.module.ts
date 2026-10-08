import { Module } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service.js';
import { ColaboradorController } from './colaborador.controller.js';

@Module({
  controllers: [ColaboradorController],
  providers: [ColaboradorService],
})
export class ColaboradorModule {}
