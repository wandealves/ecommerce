import { Injectable } from '@nestjs/common';

import { Article } from '../models/article.model';
import { IContract } from './contract';
import { Flunt } from '../../utils/flunt';

@Injectable()
export class ArticleContract implements IContract {
  errors: any[];

  validate(model: Article): boolean {
    const flunt = new Flunt();

    flunt.isRequired(model.name, 'Name is required');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
