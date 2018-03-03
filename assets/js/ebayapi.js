var ebay = {
	price: 0,
	model: '',
	description: '',
	name: '',
	upc: '',
	image: '',
	link: '',
	queryURL: 'http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=TylerSch-pricingC-PRD-edf6c4a56-cf9e2e63&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=' + searchTerm
	getItem: function(searchTerm) {
		$.ajax({
			url: this.queryURL,
			method: "findItemsByKeywords"
		}).then(function (renderFunction(response)))
	}
}


ebay.getItem('mossberg 500');
