var countries = require('../models/countries.json');

module.exports = {
	index: function(req, res) {
		res.render('index');
	},

	getAll: function(req, res) {
		res.send(countries);
	},

	search: function(req, res) {
		console.log("search req.query", req.query);
		res.send(req.query);
	}
}