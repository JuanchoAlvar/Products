const Producto = require('../models/producto');

const getProducts = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};

const postProducts = async (req, res) => {
    try {
        const newProducto = new Producto(req.body);
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        console.error('Error al crear los productos:', error);
    res.status(500).json({ message: 'Error al crear el producto' });
    }
};

const putProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const putProducts = await Producto.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(putProducts);
    } catch (error) {
        console.error('Error al actualizar los productos:', error);
        res.status(500).json({ message: 'Error al actualizar el producto' });
    }
};

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        await producto.findByIdAndDelete(id);
        res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
        console.error('Error al eliminar los productos:', error);
        res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};

module.exports = { getProducts, postProducts, putProducts, deleteProducts };