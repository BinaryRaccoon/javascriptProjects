// Create a function to find different dimensions of a cube.
function findDimensions(length, width, height) {
    var perimeter = (length * 2) + (width * 2); 
    var area = length * width; 
    var volume = length * width * height; 
    var dimensions = [perimeter, area, volume];
    return dimensions; 
}

// Create variables to find the perimeter, area, and volume of the first cube.
var perimeterOne = findDimensions(2, 3, 4)[0];
var areaOne = findDimensions(2, 3, 4)[1];
var volumeOne = findDimensions(2, 3, 4)[2];

// Create variables to display the results of the calculations on you html page.
var el = document.getElementById('perimeterOne');
el .textContent = perimeterOne + ' meters'; 

var el = document.getElementById('areaOne');
el .textContent = areaOne + ' meters squared'; 

var el = document.getElementById('volumeOne');
el .textContent = volumeOne + ' meters cubed'; 

// Create variables to find the perimeter, area, and volume of the second cube. 
var perimeterTwo = findDimensions(1, 2, 3)[0];
var areaTwo = findDimensions(1, 2, 3)[1];
var volumeTwo = findDimensions(1, 2, 3)[2];

//Create variables to display the results of the calculations on your html page. 
var el = document.getElementById('perimeterTwo');
el .textContent = perimeterTwo + ' meters'; 

var el = document.getElementById('areaTwo');
el .textContent = areaTwo + ' meters squared'; 

var el = document.getElementById('volumeTwo');
el .textContent = volumeTwo + ' meters cubed'; 