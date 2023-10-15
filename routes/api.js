const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD Routes for Products
router.get('/products', productController.getAllProducts); // Get all products
router.get('/products/:id', productController.getProductById); // Get a single product by ID
router.post('/products', productController.createProduct); // Create a new product
router.put('/products/:id', productController.updateProduct); // Update a product by ID
router.delete('/products/:id', productController.deleteProduct); // Delete a product by ID
router.delete('/products', productController.deleteAllProducts); // Remove all products
router.get('/products', productController.findProductsByName); // Find products by name

// Users routes
var usersRouter = require('./users');
router.use('/users', usersRouter);

module.exports = router;
