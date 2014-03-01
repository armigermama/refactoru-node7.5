var CountryModel = require('../models/countriesModel.js');

module.exports = {
	index: function(req, res) {
		res.render('index');
	},

	getAll: function(req, res) {
		res.send(countries);
	},

	search: function(req, res) {

		var filterCountriesList = [];

		var term = (req.query.term).toLowerCase();

		var matchTerm = new RegExp(term, 'gi');

		CountryModel.filter(function(country) {
			matchTerm.test(country.name) ? filterCountriesList.push(country) : false;
		})

		res.send(filterCountriesList);
	}, // end of search route

	populateDB: function(req, res) {
		CountryModel.callme();
		res.send('DB populated');
	}
};