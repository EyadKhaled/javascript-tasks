var myDiv = document.querySelector('div');

window.addEventListener('load', function() {

  if (navigator.onLine) {

    myDiv.textContent =

    'You are OnLine.';

    myDiv.style.backgroundColor = "#4CAF50";

  } else {

    myDiv.textContent =

    'You are OffLine.';

    myDiv.style.backgroundColor = "#F44336";

}});

window.addEventListener('online', function() {

 	myDiv.textContent =

  	'Connection is back..!';

  	myDiv.style.backgroundColor = "#4CAF50";

    setTimeout(function () {myDiv.innerHTML = 'You are OnLine.'}, 1000);

});

window.addEventListener('offline', function() {
  
 	myDiv.textContent =

  	'Connection is down..!';

  	myDiv.style.backgroundColor = "#F44336";

    setTimeout(function () {myDiv.innerHTML = 'You are OffLine.'}, 1000);

});