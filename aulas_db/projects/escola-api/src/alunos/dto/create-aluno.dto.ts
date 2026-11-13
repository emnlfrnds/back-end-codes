import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Min,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateAlunoDto {
  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome completo do aluno',
  })
  @IsString({
    message: 'Seu nome não deve conter números',
  })
  @IsNotEmpty({
    message: 'Seu nome é obrigatório',
  })
  nome: string;

  @ApiProperty({
    example: '18',
    description: 'Idade do aluno',
  })
  @IsInt({
    message: 'Sua idade deve ser um número',
  })
  @Min(0, {
    message: 'Você não pode ter idade negativa',
  })
  idade: number;

  @ApiProperty({
    example: '0001',
    description: 'Matrícula do aluno',
  })
  @IsString()
  @IsNotEmpty({
    message: 'Sua matrícula é obrigatória',
  })
  matricula: string;

  @ApiProperty({
    example: ['Programador Full Stack'],
    description: 'Curso(s) do aluno',
  })
  @IsString({
    each: true,
    message: 'Seu curso deve ser escrito em texto',
  })
  @IsArray()
  @ArrayMinSize(1, {
    message: 'Você deve ter, pelo menos, um curso',
  })
  cursos: string[];

  @ApiProperty({
    example: true,
    description: 'Esse aluno está ativo',
  })
  @IsBoolean({
    message: 'Deve ser verdadeiro ou falso.',
  })
  @IsNotEmpty({
    message: 'O aluno deve estar ativo ou inativo',
  })
  ativo: boolean;
}
