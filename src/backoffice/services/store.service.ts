import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Cart } from '../models/cart.model';
import { ItemDto } from '../dtos/item.dto';
import { ArticleService } from './article.service';
import { StoreDto } from '../dtos/store.dto';
import { Article } from '../models/article.model';
import { CartService } from './cart.service';
import { Discount } from '../models/discount';
import { map } from 'rxjs/operators';

@Injectable()
export class StoreService {

  constructor(
    @InjectModel('Cart') private readonly model: Model<Cart>,
    private readonly articleService: ArticleService,
    private readonly cartService: CartService) {
  }

  async createAsync(dto: StoreDto): Promise<any> {

    const carts = dto.articles.map(art => {
      return dto.carts.map(crt => {
        const items = crt.items
          .filter(it => it.article_id === art.id);

        const price = art.price;
        const total = items.reduce((total, item) => {
          return total + (price * item.quantity);
        }, 0);

        return { id: crt.id, total: total };
      });
    });

    return carts;

  }
}
