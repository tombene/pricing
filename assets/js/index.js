$('#btn-search').on('click', function () {

	if (localStorage.getItem('loggedIn')) {
		removeContainerChildren();
		var searchString = $('#search-input').val();
		walmart.getItems(searchString, displayItems);
		amazon.getItems(searchString, displayItems);
		ebay.getItems(searchString, displayItems);
		discount.getCoupons(searchString);
		$('#search-input').val('');
	}
	else {
		window.location.replace("register.html");
	}
});

function displayItems(data, containerName) {
	var div = $('<div>').addClass('row ' + containerName + '-div');
	div.append('<h1>' + '$' + data.price + '</h1>');
	div.append('<p>' + data.name + '</p>');
	div.append('<p>' + data.model + '</p>');
	div.append('<p>' + data.upc + '</p>');
	div.append('<p class="hide-me" id="item-desc">' + data.description + '</p>');

	for (var i = 0; i < data.image.length; i++) {
		var imgTag = $('<img>').attr('src', data.image[i]).addClass(containerName + '-img-' + i);
		div.append(imgTag);
	}
	div.append('<p><a href="' + data.url + '">BUY HERE!</a></p>');
	$('#' + containerName + '-container').append(div);
	storeSearch(containerName + ': ' + data.name + ' Price: $' + data.price);
}

function removeContainerChildren() {
	$('.walmart-div').remove();
	$('.amazon-div').remove();
	$('.ebay-div').remove();
	$('#discount-container').empty();
}

$(document).on('click', '#item-desc', function () {
	if ($(this).attr('class') === 'hide-me') {
		$(this).attr('class', 'show-me');
	} else {
		$(this).attr('class', 'hide-me');
	}

});

function storeSearch(searchString) {
	if (localStorage.getItem('userKey')) {
		database.ref('user/' + localStorage.getItem('userKey')).push({
			searchResult: searchString
		})
	}
}