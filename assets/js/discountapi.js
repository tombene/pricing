var discount = {
	url: "https://api.discountapi.com/v2/deals/?query=",
	price: 0,
	description: '',
	name: '',
	image: '',
	link: '',
	getCoupons: function (searchTerm) {
		$.ajax({
			url: this.url + searchTerm,
			method: "GET",
		}).then(function (response) {
			// displayItems(response);
			console.log(response);
		})
			.catch(function (error) {
				console.log(error);
			})
	}
};
