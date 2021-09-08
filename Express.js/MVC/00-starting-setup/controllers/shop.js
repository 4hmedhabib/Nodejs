const Product = require('../models/products');

exports.getProducts = (req, res, next) => {
	Product.fetchAll((products) => {
		console.log(products, '===');
		res.render('shop', {
			products: products,
			pageTitle: 'Shop',
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
			productCSS: true
		});
	});
};
