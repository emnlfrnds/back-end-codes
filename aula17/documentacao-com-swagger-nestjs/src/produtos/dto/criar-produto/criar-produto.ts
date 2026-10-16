import { ApiProperty } from "@nestjs/swagger";

export class CriarProduto {

    @ApiProperty({
        example: 'Pasta de dente',
        description: 'Descrição da função do Produto',
    }) nome: string;

    @ApiProperty({
        example: 5.99,
        description: 'Valor do produto',
    }) preco: number;

    @ApiProperty({
        example: 'Produtos Higiênicos',
        description: 'Categoria geral do Produto',
    }) categoria: string;

}
