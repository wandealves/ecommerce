import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { Article } from '../models/article.model';
import { InjectModel } from '@nestjs/mongoose';
import { QueryDto } from '../dtos/query.dto';

@Injectable()
export class ArticleService {

  constructor(@InjectModel('Article') private readonly model: Model<Article>) {
  }

  async createAsync(data: Article): Promise<Article> {
    const cart = new this.model(data);
    return await cart.save();
  }

  async createOrUpdate(key: number, data: Article): Promise<Article> {
    return await this.model.findOneAndUpdate({ key }, data);
  }

  async queryAsync(model: QueryDto): Promise<Article[]> {
    return await this.model.
      find(model.query, model.fields,
        { skip: model.skip, limit: model.take })
      .sort(model.sort)
      .exec();
  }

  async findAllAsync(): Promise<Article[]> {
    const results = await this.model
      .find({}, 'key name price')
      .sort('name')
      .exec();

    return results.map(data => {
      return {
        id: data.key,
        name: data.name,
        price: data.price,
      }
    });
  }

  async findAllByKeysAsync(keys: number[]): Promise<Article[]> {
    return await this.model
      .find({ key: keys }, 'key name price')
      .sort('name')
      .exec();
  }
}
