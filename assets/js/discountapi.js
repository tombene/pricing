var discount = {
	url: "https://api.discountapi.com/v2/deals/?query=",
	getCoupons: function (searchTerm) {
		$.ajax({
			url: this.url + searchTerm,
			method: "GET",
		}).then(function (response) {
			console.log(response);
			$("#discount-container").append("<p>" + 'Check out this (somewhat) related coupon! - ' + response.deals[0].deal.merchant.name + "</p>");
			$("#discount-container").append("<a href='" + response.deals[0].deal.url + "'><img src='" + response.deals[0].deal.image_url + "' /> </a>");
			
			if (searchTerm === ""){
				$("#discount-container").empty()
			}
		})
			.catch(function (error) {
				console.log(error);
			})
	}
};