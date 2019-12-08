import { Injectable } from '@nestjs/common';

import { CartDto } from '../dtos/cart-dto';
import { IContract } from './contract';
import { Flunt } from '../../utils/flunt';

@Injectable()
export class CartContract implements IContract {
  errors: any[];

  validate(model: CartDto): boolean {
    const flunt = new Flunt();

    flunt.isRequired(model.itens, 'Itens is required');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
