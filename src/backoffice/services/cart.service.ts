import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cart } from '../models/cart.model';
import { ItemDto } from '../dtos/item.dto';
import { ArticleService } from './article.service';

@Injectable()
export class CartService {

  constructor(
    @InjectModel('Cart') private readonly model: Model<Cart>,
    private readonly articleService: ArticleService) {
  }

  async createAsync(key: number, itemsDto: ItemDto[]): Promise<Cart> {
    const keys: number[] = itemsDto.map(data => {
      return data.article_id;
    });

    const articles = await this.articleService.findAllByKeysAsync(keys);

    const items = itemsDto.map(data => {
      return {
        quantity: data.quantity,
        article: articles.find(a => a.key === data.article_id)
      }
    });

    const cart = new this.model(new Cart(key, items));
    return await cart.save();
  }

  async findAllAsync(): Promise<Cart[]> {
    const results = await this.model
      .find({}, 'key items')
      .populate('items.article', 'key name price')
      .sort('key')
      .exec();

    return results.map(data => {
      return {
        id: data.key,
        items: data.items,
      }
    });
  }
}
