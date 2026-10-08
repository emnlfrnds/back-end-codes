import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service.js';
import { colaboradorSchema } from './schema/colaborador.schema.js';
import type { Colaborador } from './schema/colaborador.schema.js';
import { ZodValidationPipe } from '../zod-validation/zod-validation.pipe.js';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) { }

  @Post()
  @UsePipes(new ZodValidationPipe(colaboradorSchema))
  async create(@Body() body: Colaborador ) {
    return {
        message: 'Colaborador criado com sucesso',
        colaborador: body,
    }
  }

  @Get()
  findAll() {
    return this.colaboradorService.findAll();
  }
}
