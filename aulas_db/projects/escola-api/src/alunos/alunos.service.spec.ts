import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { AlunosService } from './alunos.service.js';
import { Aluno } from './schemas/aluno.schema.js';

describe('AlunosService', () => {
  let service: AlunosService;
  let save: ReturnType<typeof vi.fn>;

  beforeEach(async () => {
    save = vi.fn();

    class AlunoModelMock {
      save = save;

      constructor(_createAlunoDto: CreateAlunoDto) {}
    }

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlunosService,
        {
          provide: getModelToken(Aluno.name),
          useValue: AlunoModelMock,
        },
      ],
    }).compile();

    service = module.get<AlunosService>(AlunosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('returns a conflict when the matricula already exists', async () => {
    save.mockRejectedValue({ code: 11000 });

    await expect(
      service.create({
        nome: 'João da Silva',
        idade: 18,
        matricula: '0001',
        cursos: ['Programador Full Stack'],
      }),
    ).rejects.toMatchObject({
      status: 409,
      message: 'Já existe um aluno cadastrado com esta matrícula.',
    });
  });
});
