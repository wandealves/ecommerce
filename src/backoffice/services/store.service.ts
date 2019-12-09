import { Injectable } from '@nestjs/common';

import { StoreDto } from '../dtos/store.dto';
import { Store } from '../models/store';
import { Delivery } from '../models/delivery';
import { Volume } from '../models/volume';
import { Discount } from '../models/discount';

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

    let discounts: Discount[] = null;

    if (dto.discounts) {
      discounts = dto.discounts.map(d => {
        return new Discount(d.article_id, d.type, d.value);
      });
    }

    const store = new Store(dto.articles, dto.carts, deliverys, discounts);
    return store.calculate();
  }
}
