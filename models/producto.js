const moongose = require('../database/config');

const ProductoSchema = new moongose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    weight: { type: Number, required: true },
});

const Producto = moongose.model('Producto', ProductoSchema);

module.exports = Producto;