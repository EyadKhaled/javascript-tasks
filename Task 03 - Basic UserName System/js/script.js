
function change() {

	var newName = document.getElementById("input").value;

	if (newName == "") {

		return document.getElementById("error").innerHTML = "Type your new UserName first";

	} else if (newName.length >= 15) {

		return document.getElementById("error").innerHTML = "The name is too big";

	} else if (newName.length <= 2) {

		return document.getElementById("error").innerHTML = "The name is too small";

	}  else if (newName <= 0) {

		return document.getElementById("error").innerHTML =

		"Don't use negative numbers or 0";

	} else {

		return document.getElementById("realUserName").innerHTML = newName,

		       document.getElementById("error").innerHTML = "";

	}

}