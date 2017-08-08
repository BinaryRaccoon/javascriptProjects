// Get Player To Move With Arrow Keys

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".player").finish().animate({
            left: "-=10"
        });
        break;
    case 38:    //up arrow key
        $(".player").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    //right arrow key
        $(".player").finish().animate({
            left: "+=10"
        });
        break;
    case 40:    //bottom arrow key
        $(".player").finish().animate({
            top: "+=10"
        });
        break;
    }
});

/*
$(document).keyup(function(e){
    switch (e.which){
    case 37:    //left arrow key
        if($(".player").offset().left < 0) {
            $(".player").className += " killed";
        };
        break;
    case 38:    //up arrow key
        if($(".player").offset().top < 0) {
            $(".player").className += " killed";
        };
        break;
    case 39:    //right arrow key
        if(($(".player").offset().left + clientWidth) < 500) {
            $(".player").className += " killed";
        };
        break;
    case 40:    //bottom arrow key
        if(($(".player").offset().top + clientHeight) < 500) {
            $(".player").className += " killed";
        };
        break;
    }
});
*/

/*
var player = document.getElementById('player');
    playerPosition = player.getBoundingClientRect();
    left = playerPosition.left;
    top = playerPosition.right;
    right = left + player.clientWidth; 
    bottom = top + player.clientHeight; 

if (top === 10) {
    player.className += ' killed';
}
*/
/*
var player = document.getElementById('player');
var playerOffset = $('#player').offset();
var containerOffset = $('#fixedDiv').offset();

if (containerOffset.top !== playerOffset.top) {
    player.className += ' killed';
}
*/
/*
var $window = $(window);
    var $player = $('#player');
    var $fixedDiv = $('#fixedDiv');
    var $fixedDivTwo = $('#fixedDivTwo');

var two = 2; 

$(function() {
    if ($player.offset().top >= 500) {
        $player.className += ' killed';
    }
});

$(function() {
    var msg = $player.offset().top; 
    var el = document.getElementById('test');
    el.textContent = msg;
});
*/



// Get Player To Be Destroyed When It Collides With Other Divs
/*
var bottomWall = document.getElementById('bottomWall');
    bottomWallPosition = bottomWall.getBoundingClientRect();
    bottomWallLeft = bottomWallPosition.left;
    bottomWallTop = bottomWallPosition.right;
    bottomWallRight = bottomWallLeft + bottomWall.clientWidth; 
    bottomWallBottom = bottomWallTop + bottomWall.clientHeight; 

var player = document.getElementById('player');
    playerPosition = player.getBoundingClientRect();
    left = playerPosition.left;
    top = playerPosition.right;
    right = left + player.clientWidth; 
    bottom = top + player.clientHeight; 

if (top = bottomWallTop) {
    player.className += 'killed';
}
*/

/*
file:///home/kncozart/Documents/javascriptProjects/Learning%20Javascript/Javascript%20Game/game.html
https://stackoverflow.com/questions/15792855/moving-div-box-using-javascript#15793492
https://api.jquery.com/position/
javascriptbook.com
*/

