var walmart = {
	currentItem: {
		price: 0,
		model: '',
		description: '',
		name: '',
		upc: '',
		image: [],
		url: ''
	},
	getItems: function (searchTerm, displayItems) {
		queryURL = 'https://api.walmartlabs.com/v1/search?query=' + searchTerm + '&format=json&apiKey=ke74j6r2h3zd93y27veta57j';
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			if (response.numItems !== 0) {
				var i = 0;
				walmart.currentItem.image = [];
				walmart.currentItem.price = response.items[i].salePrice;
				walmart.currentItem.model = response.items[i].modelNumber;
				walmart.currentItem.description = response.items[i].shortDescription;
				walmart.currentItem.name = response.items[i].name;
				walmart.currentItem.upc = response.items[i].upc;
				var numImages = response.items[i].imageEntities.length;
				if (numImages > 5) {
					numImages = 5;
				}
				for (var j = 0; j < numImages; j++) {
					walmart.currentItem.image.push(response.items[i].imageEntities[j].thumbnailImage);
				}
				walmart.currentItem.url = response.items[i].productUrl;
				displayItems(walmart.currentItem, 'walmart');
			}else{
				displayFoundNothing('walmart');
			}
		});
	}
}