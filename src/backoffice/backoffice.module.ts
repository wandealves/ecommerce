import { Module } from '@nestjs/common';

import { ArticleController } from './controllers/article.controller';

@Module({
  controllers: [ArticleController],
})
export class BackofficeModule { }
