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
		searchTerm = 'baseball bat';
		queryURL = 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=TylerSch-pricingC-PRD-edf6c4a56-cf9e2e63&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=' + searchTerm + '&paginationInput.entriesPerPage=1';
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			var i = 0;
			console.log(JSON.parse(response));
			var data = JSON.parse(response);
			ebay.currentItem.price = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__;
			ebay.currentItem.model = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].itemId[0];
			ebay.currentItem.description = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__;
			ebay.currentItem.name = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].title[0];
			ebay.currentItem.upc = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].itemId[0];
			// for (var j; j < 5; j++) {
			// 	ebay.currentItem.image[j] = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].sellingStatus[0].currentPrice[0].__value__;
			ebay.currentItem.url = data.findItemsByKeywordsResponse[i].searchResult[0].item[0].viewItemURL[0];
			console.log(ebay.currentItem);
		}
			// renderCallBack(ebay.currentItem, 'ebay');
		)
	}
}


ebay.getItems();

