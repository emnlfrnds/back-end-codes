import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[LOG] Método: ${req.method} | Rota: ${req.originalUrl} | Data e Hora: ${new Date()}`);

    if (req.originalUrl.includes('/admin')) {
      const role = req.headers['x-user-role'];
      if (role !== 'supervisor') {
        return res.status(404).json({
          statusCode: 404,
          message: `Cannot ${req.method} ${req.originalUrl}`,
          error: 'Not Found'
        });
      }
    }

    if (req.originalUrl.includes('/secret')) {
      const role = req.headers['x-user-role'];
      if (role !== 'homem-secreto') {
        return res.status(404).json({
          statusCode: 404,
          message: `Cannot ${req.method} ${req.originalUrl}`,
          error: 'Not Found'
        });
      }
    }

    next();
  }
}
