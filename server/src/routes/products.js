const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/products')


router.post('/product', productsControllers.createProduct)
router.get('/products', productsControllers.getAllProduct)



module.exports = router;