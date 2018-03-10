var loggedIn = false;
$("#registerButton").on("click", function() {
	var username = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();
	loggedIn = true;
	database.ref().child('user').push({
		Username: username,
		Email: email,
		Password: password
	});
})