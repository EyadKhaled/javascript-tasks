var myAge = prompt("What is your Age ?");

if (myAge < 18) {

	document.getElementById("test").innerHTML =

	"Oh...Your age is " + "<span style='color: #FAFAFA;'>" + myAge + "</span>" + " , So you don't have permission to enter this website";

	document.getElementById("test2").innerHTML = "<div style='display:none;'";

} else if (myAge >= 100) {

	document.getElementById("test").innerHTML =

	"Please Enter Your Real Age...";

} else if (isNaN(myAge)) {

	document.getElementById("test").innerHTML =

	"Your Age Must Be In Numbers";

} else {

	document.getElementById("test").innerHTML =

	"Your Age Is " + "<span style='color: #FAFAFA;'>" + myAge + "</span>" + " , So You Have Permission To Enter This Website";

	document.getElementById('test2').innerHTML = "Welcome";
}
