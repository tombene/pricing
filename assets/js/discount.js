var discount = {
	price: 0,
	model: '',
	description: '',
	name: '',
	upc: '',
	image: '',
	link: '',
	queryURL: '' + searchTerm,
	getItem: function(searchTerm) {
		$.ajax({
			url: this.queryURL,
			method: "findItemsByKeywords"
		}).then(function(response) {
			renderFunction(response);
		})
	}
}