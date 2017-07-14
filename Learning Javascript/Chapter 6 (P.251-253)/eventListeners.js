// Event Listeners

/* function checkUsernameLength() {
    var elMsg = document.getElementById('response');
    if (this.value.length < 10) {
        elMsg.textContent = 'Username must be longer than ten characters.';
    }
    else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username');
elUsername.addEventListener('focusout', checkUsernameLength, false); */

// Event Listeners and Parameters 

var elUsername = document.getElementById('username');
var elResponse = document.getElementById('response');

function checkUsernameLength(minLength) {
    if (elUsername.value.length < minLength) {
        elResponse.textContent = 'Username must be ' + minLength + ' characters long.';
    }
    else {
        elResponse.textContent = '';
    }
}

elUsername.addEventListener('focusout', function() {
    checkUsernameLength(15);
}, false); 