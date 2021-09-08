const path = require('path');
const adminControllers = require('../controllers/products');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminControllers.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', adminControllers.postAddProduct);

exports.routes = router;
