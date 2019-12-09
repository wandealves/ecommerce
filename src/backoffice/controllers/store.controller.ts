import { Controller, Post, Body, HttpException, HttpStatus, UseInterceptors, Get } from '@nestjs/common';

import { Result } from '../models/result.model';
import { StoreDto } from '../dtos/store.dto';
import { StoreService } from '../services/store.service';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { StoreContract } from '../contracts/store.contract';

@Controller('api/stores')
export class StoreController {

  constructor(private readonly storeService: StoreService) {
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new StoreContract()))
  post(@Body() model: StoreDto) {
    try {
      const result = this.storeService.create(model);
      return result;
    } catch (error) {
      throw new HttpException(
        new Result('Failed registration', false, null, error),
        HttpStatus.BAD_REQUEST);
    }
  }
}
