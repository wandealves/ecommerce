import * as mongoose from 'mongoose';

export const CartSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
    index: {
      unique: true,
    },
  },
  items: [
    {
      article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
      },
      quantity: {
        type: Number,
      },
    },
  ],
});
