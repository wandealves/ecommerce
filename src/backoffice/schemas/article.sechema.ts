import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  key: {
    type: Number,
    required: true,
    index: {
      unique: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
