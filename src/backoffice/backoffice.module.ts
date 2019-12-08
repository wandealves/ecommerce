import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartSchema } from './schemas/cart.schema';
import { ArticleSchema } from './schemas/article.sechema';
import { CartController } from './controllers/cart.controller';
import { ArticleController } from './controllers/article.controller';
import { CartService } from './services/cart.service';
import { ArticleService } from './services/article.service';

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
    ]),
  ],
  controllers: [
    CartController,
    ArticleController],
  providers: [
    CartService,
    ArticleService],
})
export class BackofficeModule { }
