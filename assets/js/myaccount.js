if (localStorage.getItem('userKey')) {
	var i = 0;
	database.ref('user/' + localStorage.getItem('userKey')).on("child_added", function (childSnapshot) {
		// for (var i = 0; i < childSnapshot.numChildren(); i++) {
		i++;	
		$('#searchHistory').append('<p class="result">' + i + '. ' + childSnapshot._e._.B.value.T + '</p>')
		// }
	}
)}