import {
    Controller,
    Post,
    Body
} from '@nestjs/common';

import {
    ApiTags,
    ApiOperation,
    ApiResponse
} from '@nestjs/swagger';

import { CriarProduto } from '../dto/criar-produto/criar-produto.js';

@ApiTags('produto')
@Controller('produto')
export class ProdutoController {

    @Post()
    @ApiOperation({
        summary: 'Cadastra um novo produto no catálogo'
    })
    @ApiResponse({
        status: 201, description: 'Produto Cadastrado com sucesso'
    })
    @ApiResponse({
        status: 400, description: 'Payload enviado com dados inválidos'
    })

    async criar(@Body() criarProduto: CriarProduto) {
        return {
            id: 150,
            ...criarProduto,
            criadoEm: new Date().toLocaleDateString(),
        };
    }

}
