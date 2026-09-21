import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ConvidadoService {
    private convidados = [
        {id: 1, nome: "Emanoel", idade: 18},
        {id: 2, nome: "Enzo", idade: 19},
        {id: 3, nome: "Henry", idade: 18},
    ];

    findAll() {
        return this.convidados;
    }

    findOne(id: number) {
        const convidado = this.convidados.find((c) => c.id === id);

        if (!convidado) {
            throw new NotFoundException(`Convidado com ID ${id} não existe`); // Status 404
        }

        return convidado;
    }

    updateIdade(id: number, idade: number) {
        const convidado = this.findOne(id);
        convidado.idade = idade;
        return convidado;
    }

    remove(id: number) {
        const index = this.convidados.findIndex((c) => c.id === id);

        if (index === -1) {
            throw new NotFoundException(`Convidado com ID ${id} não existe`);
        }

        this.convidados.splice(index, 1);
    }
}
