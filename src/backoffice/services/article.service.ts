import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Article } from '../models/article.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticleService {

  constructor(@InjectModel('Article') private readonly model: Model<Article>) {
  }

  async createAsync(data: Article): Promise<Article> {
    const cart = new this.model(data);
    return await cart.save();
  }

  async findByKeysAsync(keys: number[]): Promise<Article[]> {
    this.model.
    return null;
  }
}
