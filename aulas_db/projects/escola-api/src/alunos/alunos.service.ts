import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { Aluno, AlunoDocument } from './schemas/aluno.schema.js';

function isDuplicateKeyError(error: unknown): error is { code: number } {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === 11000
  );
}

@Injectable()
export class AlunosService {
  constructor(
    @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
  ) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const createdAluno = new this.alunoModel(createAlunoDto);

    try {
      return await createdAluno.save();
    } catch (error) {
      if (isDuplicateKeyError(error)) {
        throw new ConflictException(
          'Já existe um aluno cadastrado com esta matrícula.',
        );
      }

      throw error;
    }
  }

  async findAllPage(
    page: number,
    limit: number,
    nome?: string,
    curso?: string,
    orderBy?: string,
    orderDirection?: 'asc' | 'desc' | string,
  ) {
    const skip = (page - 1) * limit;

    const filtro: {
      nome?: { $regex: RegExp };
      cursos?: string;
    } = {};
    if (nome) {
      filtro.nome = {
        $regex: new RegExp(nome, 'i'),
      };
    }

    if (curso) {
      filtro.cursos = curso;
    }

    const sort: any = {};

    if (orderBy) {
      sort[orderBy] = orderDirection === 'desc' ? -1 : 1;
    }

    const [data, total] = await Promise.all([
      this.alunoModel.find(filtro).sort(sort).skip(skip).limit(limit).exec(),
      this.alunoModel.countDocuments(filtro).exec(),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  // async findAll(): Promise<Aluno[]> {
  //   return this.alunoModel.find().exec();
  // }

  async findOne(id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findById(id).exec();

    if (!aluno) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }

    return aluno;
  }

  async update(id: string, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
    const aluno = await this.alunoModel
      .findByIdAndUpdate(id, updateAlunoDto, {
        new: true,
      })
      .exec();

    if (!aluno) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }

    return aluno;
  }

  async remove(id: string): Promise<Aluno> {
    const aluno = await this.alunoModel.findByIdAndDelete(id).exec();

    if (!aluno) {
      throw new NotFoundException(`Aluno com id ${id} não encontrado`);
    }

    return aluno;
  }
}
