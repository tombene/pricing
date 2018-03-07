var walmart = {
	currentItem: {
		price: 0,
		model: '',
		description: '',
		name: '',
		upc: '',
		image: ['','','','',''],
		url: ''
	},
	getItems: function(searchTerm,renderCallBack){
		queryURL = 'http://api.walmartlabs.com/v1/search?query='+ searchTerm +'&format=json&apiKey=ke74j6r2h3zd93y27veta57j';
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function(response){
			var i = 0;
			walmart.currentItem.price = response.items[i].salePrice;
			walmart.currentItem.model = response.items[i].modelNumber;
			walmart.currentItem.description = response.items[i].shortDescription;
			walmart.currentItem.name = response.items[i].name;
			walmart.currentItem.upc = response.items[i].upc;
			for(var j;j<5;j++){
				walmart.currentItem.image[j] = response.items[i].imageEntities[j].thumbnailImage;
			}
			renderCallBack(walmart.currentItem);
		});
	}
}