var ebay = {
	currentItem: {
		price: 0,
		model: '',
		description: '',
		name: '',
		upc: '',
		image: ['', '', '', '', ''],
		url: ''
	},
	getItems: function (searchTerm, renderCallback) {
		queryURL = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=TylerSch-pricingC-PRD-edf6c4a56-cf9e2e63&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=' + searchTerm + '&paginationInput.entriesPerPage=5';
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			var i = 0;
			ebay.currentItem.price = response.items[i].salePrice;
			ebay.currentItem.model = response.items[i].modelNumber;
			ebay.currentItem.description = response.items[i].shortDescription;
			ebay.currentItem.name = response.items[i].name;
			ebay.currentItem.upc = response.items[i].upc;
			for (var j; j < 5; j++) {
				ebay.currentItem.image[j] = response.items[i].imageEntities[j].thumbnailImage;
			}
			renderCallBack(ebay.currentItem);
		}

