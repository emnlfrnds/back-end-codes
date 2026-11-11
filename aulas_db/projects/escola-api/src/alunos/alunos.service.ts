import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAlunoDto } from './dto/create-aluno.dto.js';
import { UpdateAlunoDto } from './dto/update-aluno.dto.js';
import { Aluno, AlunoDocument } from './schemas/aluno.schema.js';

@Injectable()
export class AlunosService {
  constructor(
    @InjectModel(Aluno.name) private alunoModel: Model<AlunoDocument>,
  ) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const createdAluno = new this.alunoModel(createAlunoDto);

    return createdAluno.save();
  }

  async findAllPage(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const [data, total] = await Promise.all([
      this.alunoModel.find().skip(skip).limit(limit).exec(),
      this.alunoModel.countDocuments().exec(),
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
