const mongoose = require('mongoose');

const StockStatusSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color',
        required: true
    },
    stockQuantity: {
        type: Number,
        required: true
    },
    images: [String]
});

const StockStatus = mongoose.model('StockStatus', StockStatusSchema);

module.exports = StockStatus;