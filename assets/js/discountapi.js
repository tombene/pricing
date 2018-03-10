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
			$("#discount-container").append("<p>" + 'Check out this related coupon! - ' + response.deals[0].deal.merchant.name + "</p>");
			$("#discount-container").append("<a href='" + response.deals[0].deal.url + "'><img src='" + response.deals[0].deal.image_url + "' /> </a>");

		})
			.catch(function (error) {
				console.log(error);
			})
	}
};