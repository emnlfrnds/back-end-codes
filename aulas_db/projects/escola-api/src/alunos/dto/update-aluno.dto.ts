import { PartialType } from '@nestjs/swagger';
import { CreateAlunoDto } from './create-aluno.dto.js';

export class UpdateAlunoDto extends PartialType(CreateAlunoDto) {}
