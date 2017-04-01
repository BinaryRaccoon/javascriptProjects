function calculateArea(width, height) {
    var area = width * height; 
    return area; 
}

var rectangleOne = calculateArea(4, 5);
var rectangleTwo = calculateArea(5, 6);

var el = document.getElementById('area');
el .textContent = rectangleOne + ' meters'; 

var el = document.getElementById('areaTwo');
el .textContent = rectangleTwo + ' meters'; 