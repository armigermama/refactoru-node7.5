// console.log('Test main.js file');

$('#country').click(function(e){
	e.preventDefault();

	$.getJSON("/countries", function(data) {

		var countriesHTML = [];

		for (i=0; i<data.length; i++) {
			countriesHTML.push(
				"<ul>" + data[i].name + 
				"<li>French Name: " + data[i].frenchName + "</li>" +
				"<li>Local Name: " + data[i].localName + "</li>" +
				"<li>Region: " + data[i].region + "</li></ul>"
			);
		}

		countriesHTML = countriesHTML.join("");
		
		$(countriesHTML).appendTo(".country-list")
	}); //end of getJSON function from /countries route
}); //end of conutry list click event

$('#search').submit(function(e) {
	e.preventDefault();

	var searchTxt = $(this).parent().find("#search-input").val();

	$.get("/search",
		{term: searchTxt},
		function(data) {
		console.log('client data: ',data);

	}); //end of get function from /search route
}); // end of search click event