const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { 
      type: Number, 
      required: true,
      max: [100, 'İndirim yüzdesi 100\'den fazla olamaz.'],  // Maksimum değer 100
      default: 0
    },
    isActive: {type: Boolean, default: true},
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true
  },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
