import { Controller, Get, Post, Patch, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ConvidadoService } from '../../services/convidado/convidado.service.js';
import { CreateConvidado } from '../../dto/create-convidado/create-convidado.js';

@Controller('convidados')
export class ConvidadosController {
    constructor(private readonly convidadosService: ConvidadoService){}

    @Get()
    listarConvidados() {
        return this.convidadosService.findAll();
    }
    
    @Post()
    criar(@Body() createConvidado: CreateConvidado) {

        if (!createConvidado.nome) {
            return console.log("[ERROR] Convidado inválido.");
        }

        console.log('[OK] Novo usuario recebido:', createConvidado.nome)
        return {
            mensagem: `Usuário [${createConvidado.nome}] criado com sucesso!`,
            dados: createConvidado,
        };
    }

    @Patch(':id')
    atualizarIdade(@Param('id') id: string, @Body('idade') idade: number){
        console.log(`[ADM]: Atualizando a idade do ID ${id}`);
        return this.convidadosService.updateIdade(+id, idade); // Converte ID para número
    }

    @Delete(':id')
    @HttpCode(204)
    removerConvidado(@Param('id') id: string) {
        console.log(`[ADM]: Removendo convidado do ID ${id}`);
        this.convidadosService.remove(+id);
    }
}
