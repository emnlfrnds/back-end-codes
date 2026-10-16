import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProdutoController } from './produtos/produto/produto.controller.js';

@Module({
  imports: [],
  controllers: [AppController, ProdutoController],
  providers: [AppService],
})

export class AppModule {}
