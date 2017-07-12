var pass = 60;
var score = 55; 

if (score >= pass) {
    var message = 'You Passed!'; 
}
else {
    var message = 'You Failed...'; 
}

var el = document.getElementById('firstId');
el.textContent = message;

