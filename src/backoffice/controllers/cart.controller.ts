import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';

import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCart } from '../dtos/create-cart';
import { CartArticleContract } from '../contracts/createCart.contract';

@Controller('api/carts')
export class CartController {
  @Get()
  get() {
    return 'obter';
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return 'obter ' + document;
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CartArticleContract()))
  post(@Body() dto: CreateCart) {
    return dto;
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
