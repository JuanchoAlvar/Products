const express = require('express');
const router = express.Router();
const productoscontroller = require('../controllers/productoscontroller');



router.get('/', productoscontroller.getProducts);
router.post('/', productoscontroller.postProducts);
router.put('/:id', productoscontroller.putProducts);
router.delete('/:id', productoscontroller.deleteProducts);

module.exports = router;