import { Item } from './item.model';

export class Cart {
  constructor(
    public key: number,
    public items: Item[]) { }
}
