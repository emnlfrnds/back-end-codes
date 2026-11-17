import { faker } from '@faker-js/faker/locale/pt_BR';
import { NestFactory } from '@nestjs/core';
import { AlunosService } from '../alunos/alunos.service.js';
import { AppModule } from '../app.module.js';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const alunoService = app.get(AlunosService);

  console.log('=== Iniciando geração de alunos fakes ===');

  const cursos = [
    'Direito',
    'Medicina',
    'Fisioterapia',
    'Ciência da Computação',
    'Engenharia Civil',
    'Engenharia de Software',
    'Enfermagem',
    'História',
    'Matemática',
    'Filosofia',
  ];

  for (let i = 0; i < 100; i++) {
    const cursosAleatorios = faker.helpers.arrayElements(cursos, {
      min: 1,
      max: 3,
    });
    const fakeAluno = {
      nome: faker.person.fullName(),
      idade: faker.number.int({
        min: 17,
        max: 99,
      }),
      matricula: faker.string.numeric(5),
      cursos: cursosAleatorios,
      ativo: true,
    };

    try {
      await alunoService.create(fakeAluno);
    } catch (erro) {
      console.log(
        `[WARN] Pular erro ao Salvar ${fakeAluno.nome} - Matrícula Duplicada`,
      );
    }
  }

  console.log(`[OK] Banco de dados populado com sucesso!`);
  await app.close();
}
bootstrap();
