const products = [];

exports.getProducts = (req, res, next) => {
	res.render('shop', {
		prods: products,
		pageTitle: 'Shop',
		path: '/',
		hasProducts: products.length > 0,
		activeShop: true,
		productCSS: true
	});
};
