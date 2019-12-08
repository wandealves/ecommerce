import { Injectable } from '@nestjs/common';

import { IContract } from './contract';
import { Flunt } from '../../utils/flunt';
//import { CreateCart } from '../dtos/cart-dto';

@Injectable()
export class CreateCartContract implements IContract {
  errors: any[];

  validate(model: any): boolean {
   /* const flunt = new Flunt();

    flunt.isRequired(model.articles, 'Article is required');
    flunt.isRequired(model.carts, 'Cart is required');

    this.errors = flunt.errors;
    return flunt.isValid();*/
    return true;
  }
}
