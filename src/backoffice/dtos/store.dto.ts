import { CartDto } from './cart.dto';
import { DeliveryDto } from './delivery.dto';
import { ArticleDto } from './article.dto';
import { DiscountDto } from './discount.dto';

export class StoreDto {
  constructor(
    public articles: ArticleDto[],
    public carts: CartDto[],
    public delivery_fees: DeliveryDto[],
    public discounts: DiscountDto[]) { }
}
