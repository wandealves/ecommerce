import { Injectable } from '@nestjs/common';

import { IContract } from './contract';
import { Article } from '../models/article.model';
import { Flunt } from '../../utils/flunt';

@Injectable()
export class CreateArticleContract implements IContract {
  errors: any[];

  validate(model: Article): boolean {
    const flunt = new Flunt();

    flunt.isRequired(model.name, 'Nome obrigatório');

    this.errors = flunt.errors;
    return flunt.isValid();
  }
}
