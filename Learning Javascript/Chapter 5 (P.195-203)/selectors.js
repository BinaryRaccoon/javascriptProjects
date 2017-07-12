// Changing Classes

var el = document.getElementById('firstId');
el.className='cool'; 

var headers = document.getElementsByClassName('neutral');
if (headers.length > 0) {
    var el = headers[0];
    el.className = 'hot'; 
}

var tags = document.getElementsByTagName('h3');
if (tags.length > 0) {
    var el = tags[2];
    el.className = 'cream';
}

var remaining = document.getElementsByClassName('neutral');
var i;
if (remaining.length > 0) {
    for (i=0; i<remaining.length;) {
        remaining[i].className = 'cool'; 
        i+1; 
    }
}

var seventhItem = document.getElementsByTagName('h3').item(6);
seventhItem.setAttribute('class', 'hot'); 

var removeItem = document.getElementById('eighthId');
if (removeItem.hasAttribute('class')) {
    removeItem.removeAttribute('class'); 
    removeItem.setAttribute('class', 'neutral')
}

// Changing Text

document.getElementById('firstId').innerHTML = "Changed!";
