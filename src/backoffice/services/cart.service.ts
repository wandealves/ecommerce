import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cart } from '../models/cart.model';
import { Item } from '../models/item.model';
import { ItemDto } from '../dtos/item-dto';
import { ArticleService } from './article.service';

@Injectable()
export class CartService {

  constructor(
    @InjectModel('Cart') private readonly model: Model<Cart>,
    private readonly articleService: ArticleService) {
  }

  async createAsync(key: number, itensDto: ItemDto[]): Promise<Cart> {
    let itens: Item[] = [];

    itensDto.forEach(element => {
    });

    const cart = new this.model(new Cart(key, itens));
    return await cart.save();
  }
}
