var myInput = document.querySelector("input"),

	toggleType = document.querySelector("i");

toggleType.onclick = function () {

	if (toggleType.classList.contains("fa-eye-slash")) {

		myInput.setAttribute("type", "text");

		toggleType.classList.remove("fa-eye-slash");
		toggleType.classList.add("fa-eye");

	} else {

		myInput.setAttribute("type", "password");

		toggleType.classList.remove("fa-eye");
		toggleType.classList.add("fa-eye-slash");

	}
};