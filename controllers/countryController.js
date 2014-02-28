var countries = require('../models/countries.json');

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

		countries.filter(function(country) {
			matchTerm.test(country.name) ? filterCountriesList.push(country) : false;
		})

		res.send(filterCountriesList);
	} // end of search route
};