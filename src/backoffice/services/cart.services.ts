import { Injectable } from '@nestjs/common';

import { Cart } from '../models/cart.model';

@Injectable()
export class CartService {

  constructor() {
  }

  create(data: Cart) {
  }
}