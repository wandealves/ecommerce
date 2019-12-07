import { Article } from './article.model';

export class Item {
  constructor(
    public article: Article,
    public quantity: number) {
  }
}
