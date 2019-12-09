import * as mongoose from 'mongoose';

export const StoreSchema = new mongoose.Schema({
  articles: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
      },
    },
  ],
  carts: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart',
      },
    },
  ],
  delivery_fees: [
    {
      eligible_transaction_volume: {
        min_price: {
          type: Number,
        },
        max_price: {
          type: Number,
        },
      },
      price: {
        type: Number,
      },
    },
  ],
  discounts: [
    {
      article_id: {
        type: Number,
      },
      type: {
        type: String,
      },
      value: {
        type: Number,
      },
    },
  ],
});
