import { Injectable } from '@nestjs/common';

import { IContract } from './contract';
import { Flunt } from '../../utils/flunt';
import { CreateCart } from '../dtos/create-cart';

@Injectable()
export class CartArticleContract implements IContract {
  errors: any[];

  validate(model: CreateCart): boolean {
    const flunt = new Flunt();

    flunt.isRequired(model.articles, 'Article is required');
    flunt.isRequired(model.carts, 'Cart is required');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
