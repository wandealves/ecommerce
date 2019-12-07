import { Item } from './item.model';

export class Cart {
  constructor(
    public id: number,
    public itens: Item[]) { }
}
