import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BackofficeModule } from './backoffice/backoffice.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root12345@ds353338.mlab.com:53338/ecommerce_bd',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    BackofficeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
