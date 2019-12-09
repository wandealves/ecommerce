import { Injectable } from '@nestjs/common';

import { IContract } from './contract';
import { Flunt } from '../../utils/flunt';

@Injectable()
export class StoreContract implements IContract {
  errors: any[];

  validate(model: any): boolean {
    const flunt = new Flunt();

    flunt.isRequired(model.articles, 'Article is required');
    flunt.isRequired(model.carts, 'Cart is required');

    this.errors = flunt.errors;
    return flunt.isValid();
    return true;
  }
}
