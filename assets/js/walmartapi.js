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
	getItems: function(searchTerm,displayItems){
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
			var numImages = response.items[i].imageEntities.length;
			if(numImages>5){
				numImages = 5;
			}
			for(var j=0;j<numImages;j++){
				walmart.currentItem.image[j] = response.items[i].imageEntities[j].thumbnailImage;
			}
			walmart.currentItem.url = response.items[i].productUrl;
			console.log(walmart.currentItem);
			displayItems(walmart.currentItem, 'walmart');
		});
	}
}