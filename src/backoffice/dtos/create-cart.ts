import { Article } from '../models/article.model';
import { Cart } from '../models/cart.model';

export class CreateCart {
  constructor(
    public articles: Article[],
    public carts: Cart[]) { }
}
