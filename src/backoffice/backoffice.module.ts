import { Module } from '@nestjs/common';

import { StoreController } from './controllers/store.controller';
import { StoreService } from './services/store.service';

@Module({
  controllers: [
    StoreController],
  providers: [
    StoreService],
})
export class BackofficeModule { }
