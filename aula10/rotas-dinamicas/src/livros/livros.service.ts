import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class LivrosService {
    private livros = [
        {id: 1, titulo: 'Tom e Jerri', autor: 'animacao que passava de tarde'},
        {id: 2, titulo: '1984', autor: 'joge pepa pigi'},
        {id: 3, titulo: 'dou cais morro', autor: 'machado asistido'},
        {id: 4, titulo: 'vou domina o mudo', autor: 'gorje de sissa'},
        {id: 5, titulo: 'biblia', autor: 'Deus'},
    ];

    findAll() {
        return this.livros;
    }

    findById(id: number){
        const livro = this.livros.find((l) => l.id === id);
        
        if (!livro) {
            throw new NotFoundException(`[ERROR] Livro com ID ${id} não localizado em nosso acervo.`)
        }

        return livro;
    }
}
