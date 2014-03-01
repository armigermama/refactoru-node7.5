var mongoose = require('mongoose');
var countriesList = require('./countries.js');

var countrySchema = new mongoose.Schema({

		name: String,
		frenchName: String,
		localName: String,
		region: String
});

var CountryModel = module.exports = {

	addCountries: mongoose.model('country', countrySchema),

	callme: function (){
		for (var i=0; i<countriesList.length; i++) {

			var listItem = new this.addCountries( {

				name: countriesList[i].name,
				frenchName: countriesList[i].frenchName,
				localName: countriesList[i].localName,
				region: countriesList[i].region

			});

			listItem.save();
		}
	}
};