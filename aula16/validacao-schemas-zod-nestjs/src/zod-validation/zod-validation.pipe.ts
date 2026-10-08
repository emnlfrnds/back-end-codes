import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: z.ZodType) { }

  transform(value: unknown, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') return value;

    const parseResult = this.schema.safeParse(value);
    if (!parseResult.success) {
      const formattedError = parseResult.error.issues.map((issue) => ({
          campo: issue.path.join('.'),
          mensagem: issue.message,
        }));

      throw new BadRequestException({
        error: formattedError,
      });
    }
    return parseResult.data;
  }
}
