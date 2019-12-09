import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartSchema } from './schemas/cart.schema';
import { ArticleSchema } from './schemas/article.schema';
import { StoreSchema } from './schemas/store.schema';
import { CartController } from './controllers/cart.controller';
import { ArticleController } from './controllers/article.controller';
import { StoreController } from './controllers/store.controller';
import { CartService } from './services/cart.service';
import { ArticleService } from './services/article.service';
import { StoreService } from './services/store.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Cart',
        schema: CartSchema,
      },
      {
        name: 'Article',
        schema: ArticleSchema,
      },
      {
        name: 'Store',
        schema: StoreSchema,
      },
    ]),
  ],
  controllers: [
    CartController,
    ArticleController,
    StoreController],
  providers: [
    CartService,
    ArticleService,
    StoreService],
})
export class BackofficeModule { }
