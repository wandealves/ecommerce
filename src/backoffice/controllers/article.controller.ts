import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, HttpException, HttpStatus } from '@nestjs/common';

import { Article } from '../models/article.model';
import { ArticleContract } from '../contracts/article.contract';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { ArticleService } from '../services/article.service';
import { Result } from '../models/result.model';

@Controller('api/articles')
export class ArticleController {

  constructor(private readonly articleService: ArticleService) {
  }

  @Get()
  get() {
    return 'obter';
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return 'obter ' + document;
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new ArticleContract()))
  async post(@Body() model: Article) {
    try {
      const result = await this.articleService.createAsync(model);
      return new Result(
        'Successfully created article!',
        true,
        result,
        null);
    } catch (error) {
      throw new HttpException(
        new Result('Failed registration', false, null, error),
        HttpStatus.BAD_REQUEST);
    }
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
