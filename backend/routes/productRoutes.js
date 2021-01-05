const express = require('express');
const router = express.Router();

const {getAllProducts, getProductbyid} = require('../controller/productControllers')

//Get all products from db
// get /api/product
router.get('/', getAllProducts);

//get product by ID
router.get('/:id', getProductbyid);

module.exports= router;