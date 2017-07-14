$(function() {

var $newItemButton = $('#newItemButton');
var $newItemForm = $('#newItemForm');
var $textInput = $('input:text');

$newItemButton.show();
$newItemForm.hide();

$('#showForm').on('click', function(){
    $newItemButton.hide();
    $newItemForm.show();
});

$newItemForm.on('submit', function(event){
    event.preventDefault();
    var newText = $textInput.val();
    $('li:last').after('<li>' + newText + '</li>');
    $newItemButton.show();
    $newItemForm.hide();
    $textInput.val('');
});

});



/* Hide Item One On Click

$(function(){

var $firstListItem =  $('#liOne');

$('#liOne').on('click', function(){
    $firstListItem.hide();
});

});

*/ 


// Hide Any Li Tag On Click
/*
$(function(){

$('li').on('click', function(){
    $(this).hide();
});

});
*/

// Fade Out Any Li Tag On Click

$(function(){

    $('li').on('click', function(){
        $(this).fadeOut(1200);
    });

});

// Margin Left Increases On Click On Any Li Tag
/*
$(function(){

    $('li').on('click', function(){

        $(this).animate({
            marginLeft: '+=80'
        }, 500, function() {
            $(this).remove();
        });

    });

});
*/

// Opt to Use CSS for animations for different space; js takes longer to load