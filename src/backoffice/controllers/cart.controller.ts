import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';

import { CartDto } from '../dtos/cart-dto';
import { CartContract } from '../contracts/cart.contract';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart.model';

@Controller('api/carts')
export class CartController {

  constructor(private readonly cartService: CartService) {
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
  @UseInterceptors(new ValidatorInterceptor(new CartContract()))
  async post(@Body() model: CartDto) {
    await this.cartService.createAsync(model.key, model.itens);
    return model;
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
