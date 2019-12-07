import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { Article } from '../models/article.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateArticleContract } from '../contracts/createArticle.contract';

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
  @UseInterceptors(new ValidatorInterceptor(new CreateArticleContract()))
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
