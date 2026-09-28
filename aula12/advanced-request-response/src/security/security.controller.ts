import { Controller, Get, Headers, Res } from '@nestjs/common';
import type { Response } from 'express';
import { timestamp } from 'rxjs';

@Controller('security')
export class SecurityController {
    @Get()
    acessarAreaSegura(@Headers('x-api-key')apiKey: string, @Res() res: Response) {
        if (apiKey === 'EMNL2716') {
            res.setHeader('x-auth-status', 'verificado');
            return res.status(200).json({
                mensagem: 'Acesso concedido ao conteúdo seguro!',
                timestamp: new Date(),
            });
        }
        return res.status(403).json({
            erro:'Forbidden',
            mensagem:'Chave de API inválida ou ausente',
        });
    }
}
