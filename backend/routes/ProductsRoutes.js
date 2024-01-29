const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Product = require("../models/productModels");

// Get routes for all products
router.get('/products', asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        console.log('Products:', products);
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}));


// Get one product details
router.get('/products/:id', asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log('Product:', product);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product Not Found" }); 
    }
}));

module.exports = router;
 