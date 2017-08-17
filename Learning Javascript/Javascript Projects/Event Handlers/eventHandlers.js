var $circle = $('.circle');
    $content = $('.content');

$(function() {
    $content.hide();
    $circle.on('click', function() {
        $content.show();
    });
});

$(function() {
    $circle.on('dblclick', function() {
        $content.hide();
    });
});