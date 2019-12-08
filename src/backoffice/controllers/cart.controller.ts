import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';

import { CartDto } from '../dtos/cart.dto';
import { Result } from '../models/result.model';
import { CartService } from '../services/cart.service';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CartContract } from '../contracts/cart.contract';

@Controller('api/carts')
export class CartController {

  constructor(private readonly cartService: CartService) {
  }

  @Get()
  async get() {
    return await this.cartService.findAllAsync();
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CartContract()))
  async post(@Body() model: CartDto) {
    try {
      const result = await this.cartService.createAsync(model.id, model.items);
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
}
