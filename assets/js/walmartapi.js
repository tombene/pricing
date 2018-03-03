var wm = {
	price: 0,
	model: '',
	description: '',
	name: '',
	upc: '',
	image: ['','','','',''],
	url: '',
	getItems: function(searchTerm,renderCallBack){
		queryURL = 'http://api.walmartlabs.com/v1/search?query='+ searchTerm +'&format=json&apiKey=ke74j6r2h3zd93y27veta57j';
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){
			var i = 0;
			wm.price = response.items[i].salePrice;
			wm.model = response.items[i].modelNumber;
			wm.description = response.items[i].shortDescription;
			wm.name = response.items[i].name;
			wm.upc = response.items[i].upc;
			for(var j;j<5;j++){
				
			}
			wm.image = response.items[i].image
		});

	}
}