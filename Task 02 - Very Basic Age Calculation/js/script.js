var age = prompt("What is your Age?"),

    intAge = parseInt(age, 10);

document.getElementById("year").innerHTML = intAge;

document.getElementById("day").innerHTML = intAge * 365;

document.getElementById("hour").innerHTML = intAge * (365 * 24);

document.getElementById("min").innerHTML = intAge * (365 * 24 * 60)

document.getElementById("sec").innerHTML = intAge * (365 * 24 * 3600)

if (intAge < 18) {

	document.getElementById("last").innerHTML = "You are UnderAge";

} else if (intAge >= 100) {

	document.getElementById("last").innerHTML = "Hello Mr.Alien";

} else if (intAge >= 18 || intAge < 100) {

	document.getElementById("last").innerHTML = "You are not UnderAge";

} else if (intAge != Number) {

	document.getElementById("last").innerHTML = "???";

}