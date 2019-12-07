import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Article } from '../models/article.model';

@Controller('api/articles')
export class ArticleController {
  @Get()
  get() {
    return 'obter';
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return 'obter ' + document;
  }

  @Post()
  post(@Body() article: Article) {
    return article;
  }

  @Put(':document')
  put(@Param('document') document: string, @Body() body) {
    return {
      cutsomer: document,
      data: body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document: string) {
    return 'Remover';
  }
}
