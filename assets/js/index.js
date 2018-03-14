$('#loginButton').hide();
$('#registerButton').hide();
$('#accountButton').hide();
$('#signoutButton').hide();
firebase.auth().onAuthStateChanged(function (user) {
	console.log('auth state has changed on index', user);
	if (user) {
		$('#signoutButton').on('click', function () {
			firebase.auth().signOut().then(function () {
				// Sign-out successful.
			}).catch(function (error) {
				// An error happened.
			});
		});
		// User is signed in.
		$('#loginButton').hide();
		$('#registerButton').hide();
		$('#accountButton').show();
		$('#signoutButton').show();
		var pathArray = window.location.toString().split('/');
		var path = pathArray[pathArray.length - 1];
		console.log(path);
		if (path === 'register.html' || path === 'login.html') {
			window.location = '/index.html';
		}
		$('#btn-search').on('click', function (event) {
			event.preventDefault(event);
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

	} else {
		// No user is signed in.
		$('#accountButton').hide();
		$('#signoutButton').hide();
		$('#loginButton').show();
		$('#registerButton').show();
		var pathArray = window.location.toString().split('/');
		var path = pathArray[pathArray.length - 1];
		if (path === 'account.html') {
			window.location = '/index.html';
		}
	}
});