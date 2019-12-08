import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartController } from './controllers/cart.controller';
import { CartSchema } from './schemas/cart.schema';
import { ArticleSchema } from './schemas/article.sechema';

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
  controllers: [CartController],
})
export class BackofficeModule { }
