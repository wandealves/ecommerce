import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('api/articles')
export class ArticleController {
  @Get()
  get() {
    return 'obter';
  }

  @Post()
  post() {
    return 'Criar';
  }

  @Put()
  put() {
    return 'Atualizar';
  }

  @Delete()
  delete() {
    return 'Remover';
  }
}
