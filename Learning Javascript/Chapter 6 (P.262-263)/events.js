// On load, have the username focused

function focusUsername() {
    var textInput;
    textInput = document.getElementById('username');
    textInput.focus();
}
/*Notice how window node, not document node, is used*/
window.addEventListener('load', focusUsername, false); 




// When focused, we call the tip for the username
// When blured, we call the check for the username

function checkUsername() {
    var username = document.getElementById('username');
    if (username.value.length < 5) {
        response.textContent = "Not long enough yet.";
    }
    else {
        response.textContent = "";
    }
}

function tipUsername() {
    response.textContent = "Username must be 5 characters long.";
}

var el = document.getElementById('username');
var response = document.getElementById('response');

el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);






// Annoying popup to close

var annoyingMessage = 'Annoying Popup Below:';
annoyingMessage += '<div class="popup" id="close">close</div>';

var popup = document.createElement('div');
popup.setAttribute('id', 'note');
popup.innerHTML = annoyingMessage;
document.body.appendChild(popup);

function closePopup() {
    document.body.removeChild(popup);
}

var close = document.getElementById('close');
close.addEventListener('click', closePopup, false); 





// Mouse Position (needs work)
/*
var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px'); 
var py = document.getElementById('py'); 
var cx = document.getElementById('cx'); 
var cy = document.getElementById('cy'); 

function showPosition(event) {
    sx.value = event.screenX; 
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY; 
}

var el = document.getElementById('body');
el.addEventListener('mousemove', showPosition, false); 
*/



