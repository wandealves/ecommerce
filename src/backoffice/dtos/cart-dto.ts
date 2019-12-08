import { ItemDto } from './item-dto';

export class CartDto {
  constructor(
    public key: number,
    public itens: ItemDto[]) { }
}
