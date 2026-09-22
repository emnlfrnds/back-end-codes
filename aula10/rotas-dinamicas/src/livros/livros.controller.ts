import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { LivrosService } from './livros.service.js';

@Controller('livros')
export class LivrosController {

    constructor(private readonly livrosService: LivrosService) {}

    @Get()
    buscarTodos() {
        return this.livrosService.findAll();
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number) {

        return this.livrosService.findById(id);
    }
}
