var discount = {
	url: "https://api.discountapi.com/v2/deals/?query=",
	getCoupons: function (searchTerm) {
		$.ajax({
			url: this.url + searchTerm + "&category_slugs=audio,automotive,beauty_health,crafts_hobbies,electronics,fashion_accessories,fitness_product,food_alcohol, gifts,home_goods,kitchen,luggage,mens_fashion,mobile,movies_music_games,office_supplies,product,tools,toys,women_fashion",
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