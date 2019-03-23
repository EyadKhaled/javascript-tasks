var start 	= document.getElementById("input1"),

	end 	= document.getElementById("input2"),

	msg 	= document.getElementById("message"),

	error 	= document.getElementById("error"),

	years;


function Generate() {

	if (start.value < 1900 || start.value > 1999) {

		error.innerHTML = "You Need To Type Numbers From 1900 To 2050";

	} else if (end.value < 2000 || end.value > 2050) {

		error.innerHTML = "You Need To Type Numbers From 1900 To 2050";

	} else if (isNaN(start.value) || isNaN(end.value)) {

		error.innerHTML = "You Need To Type Numbers";

	} else {

		error.innerHTML = "";
			
		for (years = start.value;years <= end.value;years++) {

			var optionsel = "<option>" + years + "</option>";

		    msg.innerHTML += "<option>" + years + "</option>";

		}

	}

}