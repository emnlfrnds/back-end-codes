import { Injectable } from '@nestjs/common';

@Injectable()
export class ColaboradorService {

  private colaboradores = [
    {nome: 'Enzo', email: 'enzo@enzo.com', idade: 19, departamento: 'TI'},
  ];

  findAll() {
    return this.colaboradores;
  }
}
