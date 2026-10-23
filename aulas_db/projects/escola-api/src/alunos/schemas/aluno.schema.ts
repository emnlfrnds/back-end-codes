import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from 'mongoose';

export type AlunoDocument = HydratedDocument<Aluno>;

@Schema()
export class Aluno {
    @Prop({
        required: true
    })
    nome:string;
    
    @Prop({
        required: true
    })
    idade: number;

    @Prop({
        required: true
    })
    matricula: string;

    @Prop({
        type: [String],
        required: true,
        validate: {
            validator: (arr: string[]) => arr && arr.length >= 1,
            message: 'O aluno deve estar inscrito em pelo menos 1 curso.',
        },
    })
    cursos: string[]
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);