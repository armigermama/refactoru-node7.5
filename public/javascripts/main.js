
// FUNCTION /////////////////////////////////////////////////////

// generate DOM list from an array of country objects
var listBuilder = function(ArrayOfCountries) {
	var countriesHTML = [];

		for (i=0; i<ArrayOfCountries.length; i++) {
			countriesHTML.push(
				"<ul>" + ArrayOfCountries[i].name + 
				"<li>French Name: " + ArrayOfCountries[i].frenchName + "</li>" +
				"<li>Local Name: " + ArrayOfCountries[i].localName + "</li>" +
				"<li>Region: " + ArrayOfCountries[i].region + "</li></ul>"
			);
		}

		return countriesHTML = countriesHTML.join("");
};



// EVENT HANDLER ///////////////////////////////////////////

// Country list button: Complete list of coutry
$('#country').click(function(e){
	e.preventDefault();

	$.getJSON("/countries", function(data) {

		$(listBuilder(data)).appendTo(".country-list");
	}); //end of getJSON function from /countries route
}); //end of conutry list click event

// Search button: filter country based on search text string
$('#search').submit(function(e) {
	e.preventDefault();

	var searchTxt = $(this).parent().find("#search-input").val();

	$.get("/search", {term: searchTxt}, function(data) {
			
			console.log('filter data: ', data);
			$(".country-list").empty();
			$(listBuilder(data)).appendTo(".country-list");
		
	}); //end of get function from /search route
}); // end of search click event

