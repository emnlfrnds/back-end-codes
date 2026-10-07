import {
    Controller,
    Get,
    Param,
    BadRequestException,
    NotFoundException,
    Logger
} from '@nestjs/common';
import { ProdutosService } from './produtos.service.js';

@Controller('produtos')
export class ProdutosController {
    private readonly logger = new Logger(ProdutosController.name);
    constructor(private readonly produtosService: ProdutosService) {}

    produtos() {
        return this.produtosService.listarProduts();
    }

    @Get(':id')
    produtoId(@Param('id') Id : string) {
        const id = Number(Id);
        
        if (isNaN(id)) {
            this.logger.warn(`Tentativa de buscar com ID não numérico: ${Id}`);
            throw new BadRequestException(`ID inválido. Deve ser um número inteiro`);
        }

        const produto = this.produtos().find((produto) => produto.id === id);

        if (!produto) {
            this.logger.warn(`Produto não encontrado na busca! ID: ${id}`)
            throw new NotFoundException(`Produto com ID ${id} não localizado.`)
        }

        return produto;
    }

}
