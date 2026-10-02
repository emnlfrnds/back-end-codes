import { Controller, Get, NotFoundException, Req } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getPublic() {
    return {
      mensagem: 'Rota Pública acessada com sucesso!',
      data: new Date()
    }
  }

  @Get('admin')
  getAdmin(@Req() req: any) {
    const isAdmin = req.headers['x-user-role'] === 'supervisor';
    
    if (!isAdmin) {
      throw new NotFoundException('Cannot GET /admin');
    }
    return {
      mensagem: 'Bem-vindo ao Painel Administrativo!',
      data: new Date(),
    }
  }

  @Get('secret')
  getSecret(@Req() req: any) {
    const isSecret = req.headers['x-user-role'] === 'homem-secreto';
    if (!isSecret) {
      throw new NotFoundException('Cannot GET /secret');
    }
    return {
      mensagem: 'Bem-vindo, Homem Secreto!',
      data: new Date()
    }
  }
}
