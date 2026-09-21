import { Test, TestingModule } from '@nestjs/testing';
import { ConvidadosController } from './convidados.controller.js';

describe('ConvidadosController', () => {
  let controller: ConvidadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvidadosController],
    }).compile();

    controller = module.get<ConvidadosController>(ConvidadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
