import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosService {
    produtos = [
        {
            id: 1, nome: 'Mouse', preco: 9.90
        },
        {
            id: 2, nome: 'Teclado', preco: 19.90
        },
        {
            id: 3, nome: 'Controle Gamer', preco: 69.90
        },
        {
            id: 4, nome: 'Headset', preco: 89.90
        },
        {
            id: 5, nome: 'Monitor', preco: 119.90
        },
    ];

    listarProduts() {
        return this.produtos;
    }
}
