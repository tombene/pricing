var userKey;
$("#registerBtn").on("click", function (event) {
	var email = $("#email").val();
	var password = $("#password").val();
	localStorage.setItem('loggedIn', 'true');
	userKey = database.ref().child('user').push({
		Email: email,
		Password: password
	}).key;
	localStorage.setItem('userKey', userKey);
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
		// // Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
		// // ...
	});


	// window.location.replace("index.html");
})
