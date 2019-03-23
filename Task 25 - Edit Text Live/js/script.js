function boxLive(titleInput, titleColorInput, titleFontInput,
				 contentInput, contentColorInput, contentFontInput,
				 boxColorInput, contentBox, titleLive, contentLive) {

	'use strict';

	document.getElementById(titleInput).oninput = function () {

		document.querySelector(titleLive).textContent = this.value;

	}

	document.getElementById(titleColorInput).oninput = function () {

		document.querySelector(titleLive).style.color = this.value;

	}

	document.getElementById(titleFontInput).onchange = function () {

		document.querySelector(titleLive).style.fontFamily = this.value;

	}

	document.getElementById(contentInput).oninput = function () {

		document.querySelector(contentLive).textContent = this.value;

	}

	document.getElementById(contentColorInput).oninput = function () {

		document.querySelector(contentLive).style.color = this.value;

	}

	document.getElementById(contentFontInput).onchange = function () {

		document.querySelector(contentLive).style.fontFamily = this.value;

	}

	document.getElementById(boxColorInput).oninput = function () {

		document.getElementById(contentBox).style.backgroundColor = this.value;

	}

}

boxLive("title", "title-color", "title-font",
		"content", "content-color", "content-font",
		"box-color", "live-box", "h2", "p");	