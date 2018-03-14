firebase.initializeApp(config);
var userKey;
$("#registerButton").on("click", function (email, password) {
	var email = $("#email").val();
	var password = $("#password").val();
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
		// // Handle Errors here.
		// var errorCode = error.code;
		// var errorMessage = error.message;
		// // ...
	});
	localStorage.setItem('loggedIn', 'true');
	userKey = database.ref().child('user').push({
		Email: email,
		Password: password
	}).key;
	localStorage.setItem('userKey', userKey);
	window.location.replace("index.html");
})