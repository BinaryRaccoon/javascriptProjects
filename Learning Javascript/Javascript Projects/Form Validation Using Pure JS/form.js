$('form').on('submit', function () {
    var password = document.getElementById('password');
    var valid = password.value.length > 7;
    if (!valid) {
         alert('Password must be at least 8 characters long.');
    }
});

$('form').on('submit', function () {
    var username = document.getElementById('username');
    var valid = username.value.length > 3;
    if (!valid) {
         alert('Username must be at least 4 characters long.');
    }
});

$('form').on('submit', function () {
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        alert('Your passwords did not match.');
    }
});

$('form').on('submit', function () {
    var email = document.getElementById('email');
    var confirmEmail = document.getElementById('confirmEmail');
    if (email.value !== confirmEmail.value) {
        alert('Your emails did not match.');
    }
});

$('form').on('submit', function () {
    var email = document.getElementById('email');
    var badCharacters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!(email.value.match(badCharacters))) {
        alert('Please enter valid email.');
    }
});