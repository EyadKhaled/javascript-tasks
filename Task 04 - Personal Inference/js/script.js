var favNum = prompt("What is your favourite number from 0 to 10 ?");

switch (favNum) {

case "0":
	document.getElementById("result").innerHTML = "I HATE YOU";
	break;

case "1":
	document.getElementById("result").innerHTML = "You are a quiet person";
	break;

case "2":
	document.getElementById("result").innerHTML = "You are Friendly";
	break;

case "3":
	document.getElementById("result").innerHTML = "You are cruel";
	break;

case "4":
	document.getElementById("result").innerHTML = "You are so cute";
	break;

case "5":
	document.getElementById("result").innerHTML = "You will be a great manager";
	break;

case "6":
	document.getElementById("result").innerHTML = "You will be an awesome detective";
	break;

case "7":
	document.getElementById("result").innerHTML = "You are a special person <3";
	break;

case "8":
	document.getElementById("result").innerHTML = "You are very fast as shadow";
	break;

case "9":
	document.getElementById("result").innerHTML = "You are so funny";
	break;

case "10":
	document.getElementById("result").innerHTML = "You are the greatest person in this world";
	break;

default:
	document.getElementById("result").innerHTML = "Please select a number from 0 to 10";
	break;

}
