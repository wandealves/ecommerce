import { Article } from './article.model';
import { Cart } from './cart.model';
import { Discount } from './discount';

export class Store {
  constructor(
    public articles: Article[],
    public carts: Cart[],
    public discounts: Discount[]) { }
}
