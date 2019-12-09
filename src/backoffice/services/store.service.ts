import { Injectable } from '@nestjs/common';

import { StoreDto } from '../dtos/store.dto';
import { Store } from '../models/store';
import { Delivery } from '../models/delivery';
import { Volume } from '../models/volume';

@Injectable()
export class StoreService {

  constructor() {
  }

  create(dto: StoreDto): any {

    let deliverys: Delivery[] = null;

    if (dto.delivery_fees) {
      deliverys = dto.delivery_fees.map(dl => {
        return new Delivery(new Volume(dl.eligible_transaction_volume.min_price,
          dl.eligible_transaction_volume.max_price), dl.price);
      });
    }

    const discounts = dto.discounts.map(d => {
      return { article_id: d.article_id, type: d.type, value: d.value };
    });

    const store = new Store(dto.articles, dto.carts, deliverys, discounts);
    return store.calculate();
  }
}
