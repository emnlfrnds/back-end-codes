import {
    Body,
    Controller,
    DefaultValuePipe,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import {
    ApiConflictResponse,
    ApiOperation,
    ApiQuery,
    ApiResponse,
} from '@nestjs/swagger';
import { AlunosService } from './alunos.service.js';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar a matrícula de um aluno',
  })
  @ApiResponse({
    status: 201,
    description: 'A matrícula do aluno foi criada com sucesso!',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos para criação da matrícula de um aluno.',
  })
  @ApiConflictResponse({
    description: 'Já existe um aluno cadastrado com esta matrícula.',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  create(@Body() createAlunoDto: CreateAlunoDto) {
    return this.alunosService.create(createAlunoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Retorna a lista de todos os alunos',
  })
  @ApiResponse({
    status: 201,
    description: 'Lista de alunos retornada com sucesso!',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum aluno encontrado.',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    type: 'number',
    description: 'Número da página para páginação',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: 'number',
    description: 'Número de itens por página',
  })
  findAllPage(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ) {
    return this.alunosService.findAllPage(page, limit);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna apenas um aluno pelo ID',
  })
  @ApiResponse({
    status: 201,
    description: 'Mostrando o aluno com ID solicitado!',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum aluno encontrado.',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  findOne(@Param('id') id: string) {
    return this.alunosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualiza apenas um aluno pelo ID',
  })
  @ApiResponse({
    status: 201,
    description: 'Atualizando o aluno com ID solicitado!',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum aluno encontrado.',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto) {
    return this.alunosService.update(id, updateAlunoDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta apenas um aluno pelo ID',
  })
  @ApiResponse({
    status: 201,
    description: 'Deletando o aluno com ID solicitado!',
  })
  @ApiResponse({
    status: 404,
    description: 'Nenhum aluno encontrado.',
  })
  @ApiResponse({
    status: 500,
    description: 'Erro interno do servidor.',
  })
  remove(@Param('id') id: string) {
    return this.alunosService.remove(id);
  }
}
