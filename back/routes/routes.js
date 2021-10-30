const express = require('express');
const router = express.Router();
const productController = require('../controllers/Product.controller');

router.get("/products", productController.getAll);
router.get("/products/:code", productController.getByCode);
router.post("/products", productController.create);
router.put("/products/:code", productController.update);
router.delete("/products/:code", productController.delete);

module.exports = router;