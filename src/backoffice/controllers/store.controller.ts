import { Controller, Get, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

import { Result } from '../models/result.model';
import { StoreDto } from '../dtos/store.dto';
import { StoreService } from '../services/store.service';

@Controller('api/stores')
export class StoreController {

  constructor(private readonly storeService: StoreService) {
  }

  @Get()
  get() {
    return 'ooo';
  }

  @Post()
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
