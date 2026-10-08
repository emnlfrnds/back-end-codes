import { z } from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string().min(3, {
        message: 'O nome deve ter no mínimo 3 letras!'
    }),

    email: z.email({
        message: 'O email é inválido'
    }),

    idade: z.number({
        error: 'A idade precisa ser um número!'
    })
        .min(14, { message: 'A idade mínima é 14 anos' })
        .max(65, { message: 'A idade máxima é 65 anos' }),

    departamento: z.enum(['TI', 'RH', 'Financeiro'], {
        error: () => ({
            message: 'Escolha um departamento válido: TI, RH ou Financeiro'
        })
    })
});

export type Colaborador = z.infer<typeof colaboradorSchema>;