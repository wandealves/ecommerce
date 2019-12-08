import { Item } from './item.model';

export class Cart {
  constructor(
    public key: number,
    public itens: Item[]) { }
}
