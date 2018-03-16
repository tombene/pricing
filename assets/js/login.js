// $('#login').on('click', function () {
// 	database.ref('user/').on('child_added', function (snapshot) {
// 		console.log(snapshot);
// 		var userEmail = snapshot._e._.B.value.T;
// 		console.log(userEmail);
// 		console.log(snapshot._e._.B.left.right.value.T);
// 		if (userEmail === $('#email').val()) {
// 			localStorage.setItem('userKey', snapshot.key);
// 		}
// 		else {
// 			localStorage.setItem('userKey', '');
// 		}
// 	})
// })










var userKey;
$('#login').on('click', function () {
	var email = $("#email").val();
	var password = $("#password").val();
	localStorage.setItem('loggedIn', 'true');
	userKey = database.ref().child('user').push({
		Email: email,
		Password: password}).key;
		localStorage.setItem('userKey', userKey);
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(errorMessage);
		// ...
	});
})