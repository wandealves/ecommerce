import { ItemDto } from './item.dto';

export class CartDto {
  constructor(
    public id: number,
    public items: ItemDto[]) { }
}
