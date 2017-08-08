// When the main bubble is clicked, the smaller bubbles appear and reappear.
/*
var testBubble = document.getElementById('testBubble');
var testBubbleChild = document.getElementById('testBubbleChildOne');

testBubble.onclick = function() {
    if (testBubbleChild.className === "bubble testBubbleChild") {
        testBubbleChild.classList.add("visible");
    }
    else if (testBubbleChild.className === "bubble testBubbleChild visible") {
        testBubbleChild.classList.remove("visible");
    }
};
*/

var testBubble = document.getElementById('testBubble');
var testBubbleChild = document.getElementsByClassName('testBubbleChild');

testBubble.onclick = function() {
    for (i=0; i<testBubbleChild.length; i++) {
        if (testBubbleChild[i].className = "bubble testBubbleChild") {
            testBubbleChild[i].classList.add("visible");
        }
        i+1; 
    }
};
/*
var testBubbleChildOne = documnt.getElementById('testBubbleChildOne');
testBubbleChildOne.ondblclick = function() {
    testBubbleChildOne.animate({
        marginTop: '+=30'
    }, 500); 
}
*/
/*
var testBubbleChildVisible = document.getElementsByClassName('visible');

testBubble.ondblclick = function() {
    for (j=0; j<testBubbleChildVisible.length; j++) {
        if (testBubbleChild[j].className = "bubble testBubbleChild visible") {
            testBubbleChildVisible[j].classList.remove("visible");
        }
        j+1;
    }
};
*/
        /*
        else if (testBubbleChild[i].className = "bubble testBubbleChild visible") {
            testBubbleChild[i].classList.remove("visible");
        }
        */
