import { Article } from './article.model';
import { Cart } from './cart.model';
import { Discount } from './discount';
import { Delivery } from './delivery';

export class Store {
  constructor(
    public articles: Article[],
    public carts: Cart[] = null,
    public deliverys: Delivery[] = null,
    public discounts: Discount[] = null) { }

  calculate(): any[] {
    if (this.deliverys) {
      return this.calculateDelivery();
    }
    return this.calculateCarts();
  }

  calculateCarts(): any[] {

    if (!this.articles) {
      return null;
    }

    const results = this.carts.map(ct => {
      const quantity = ct.items.reduce((total, it) => {
        return total += it.quantity;
      }, 0);

      const total = ct.items.reduce((total, it) => {
        const price = this.articles
          .filter(ar => ar.id === it.article_id)
          .reduce((totalPrice, art) => {
            return totalPrice += art.price;
          }, 0);

        if (this.discounts && this.discounts.length > 0) {
          const discount = this.discounts.find(d => d.article_id === it.article_id);

          if (discount) {
            const discountValue = discount === null ? 0 : discount.value;
            const discountType = discount === null ? null : discount.type;

            if (discountValue > 0 && discountType) {
              return total += this.calculateDiscount(discountType, discountValue, price) * it.quantity;
            }
          }

          return total += price * it.quantity;
        }

        return total += price * it.quantity;
      }, 0);

      return {
        id: ct.id, total
      };
    });

    return results;
  }

  calculateDelivery() {

    if (!this.deliverys) {
      return null;
    }

    const resultsCart: any[] = this.calculateCarts();

    if (!resultsCart) {
      return null;
    }

    const results = resultsCart.map(r => {
      const delivery = this.deliverys.find(dl => (
        r.total >= dl.volume.min_price && r.total < dl.volume.max_price)
        || (r.total >= dl.volume.min_price && dl.volume.max_price === null));

      const price = delivery === null ? 0 : delivery.price;

      return { id: r.id, total: r.total + price };
    });

    return results;
  }

  calculateDiscount(discountType: string, discountValue: number, price: number): number {
    switch (discountType) {
      case 'amount':
        return price - discountValue;
      case 'percentage':
        const discount = (discountValue / 100) * price;
        return price - discount;
      default: return price;
    }
  }
}
