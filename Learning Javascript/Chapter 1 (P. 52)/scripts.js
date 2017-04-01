var today = new Date();
var hourNow = today.getHours();
var greeting;

    if (hourNow > 17) {
        greeting = 'Good Evening';
    } else if (hourNow > 12) {
        geeting = 'Good Afternoon';
    } else if (hourNow > 0) {
        geeting = 'Good Morning';
    } else {
        greeting = 'Welcome';
    }

document.write('<h3>' + greeting + '</h3>');